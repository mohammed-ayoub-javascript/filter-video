const fs = require('fs');
const path = require('path');

// Directories
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Function to remove console.log statements
function removeConsoleLogs(content) {
  return content.replace(/console\.log\([^)]*\);?\n?/g, '');
}

// Function to copy and process a file
function processFile(src, dest) {
  // Create subdirectories if they don't exist
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Handle binary files (images) differently from text files
  const ext = path.extname(src).toLowerCase();
  const isBinary = ['.png', '.jpg', '.jpeg', '.gif', '.ico'].includes(ext);

  if (isBinary) {
    // Direct copy for binary files
    fs.copyFileSync(src, dest);
  } else {
    // Process text files
    let content = fs.readFileSync(src, 'utf8');
    
    // Remove console.logs from JS files
    if (src.endsWith('.js')) {
      content = removeConsoleLogs(content);
    }
    
    fs.writeFileSync(dest, content);
  }
}

// Function to copy a directory
function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      processFile(srcPath, destPath);
    }
  });
}

// Copy and process all files
copyDir(srcDir, distDir);

console.log('Build completed! Extension files are in the dist directory.'); 