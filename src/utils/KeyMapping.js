// Keyboard layout mappings
export const LAYOUTS = {
  QWERTY: 'QWERTY',
  AZERTY: 'AZERTY'
};

// Bidirectional mapping for each layout
export const KEY_MAPPING = {
  'QWERTY': {
    // Letters (English to Arabic)
    'q': 'ض',
    'w': 'ص',
    'e': 'ث',
    'r': 'ق',
    't': 'ف',
    'y': 'غ',
    'u': 'ع',
    'i': 'ه',
    'o': 'خ',
    'p': 'ح',
    '[': 'ج',
    ']': 'د',
    'a': 'ش',
    's': 'س',
    'd': 'ي',
    'f': 'ب',
    'g': 'ل',
    'h': 'ا',
    'j': 'ت',
    'k': 'ن',
    'l': 'م',
    ';': 'ك',
    "'": 'ط',
    '\\':'ذ',
    '`': '\\',
    'z': 'ئ',
    'x': 'ء',
    'c': 'ؤ',
    'v': 'ر',
    'b': 'لا',
    'n': 'ى',
    'm': 'ة',
    ',': 'و',
    '.': 'ز',
    '/': 'ظ',
    
    // Numbers (English to Arabic)
    '1': '&',
    '2': 'é',
    '3': '"',
    '4': "'",
    '5': ')',
    '6': '-',
    '7': 'è',
    '8': '_',
    '9': 'ç',
    '0': 'à',
    '-': '(',
    
    // Arabic to English (reverse mapping)
    'ض': 'q',
    'ص': 'w',
    'ث': 'e',
    'ق': 'r',
    'ف': 't',
    'غ': 'y',
    'ع': 'u',
    'ه': 'i',
    'خ': 'o',
    'ح': 'p',
    'ج': '[',
    'د': ']',
    'ش': 'a',
    'س': 's',
    'ي': 'd',
    'ب': 'f',
    'ل': 'g',
    'ا': 'h',
    'ت': 'j',
    'ن': 'k',
    'م': 'l',
    'ك': ';',
    'ط': "'",
    'ذ': '\\',
    '\\': '`',
    'ئ': 'z',
    'ء': 'x',
    'ؤ': 'c',
    'ر': 'v',
    'لا': 'b',
    'ى': 'n',
    'ة': 'm',
    'و': ',',
    'ز': '.',
    'ظ': '/',
    
    // Arabic numbers to English
    '&': '1',
    'é': '2',
    '"': '3',
    "'": '4',
    ')': '5',
    '-': '6',
    'è': '7',
    '_': '8',
    'ç': '9',
    'à': '0',
    '(': '-'
  },

  'AZERTY': {
    // Letters (AZERTY to Arabic)
    'a': 'ض',
    'z': 'ص',
    'e': 'ث',
    'r': 'ق',
    't': 'ف',
    'y': 'غ',
    'u': 'ع',
    'i': 'ه',
    'o': 'خ',
    'p': 'ح',
    '^': 'ج',
    '$': 'د',
    'q': 'ش',
    's': 'س',
    'd': 'ي',
    'f': 'ب',
    'g': 'ل',
    'h': 'ا',
    'j': 'ت',
    'k': 'ن',
    'l': 'م',
    'm': 'ك',
    'ù': 'ط',
    '`': 'ذ',
    '<': '\\',
    'w': 'ئ',
    'x': 'ء',
    'c': 'ؤ',
    'v': 'ر',
    'b': 'لا',
    'n': 'ى',
    ',': 'ة',
    ';': 'و',
    ':': 'ز',
    '!': 'ظ',
    
    // Numbers (AZERTY to Arabic) opposite of Arabic to AZERTY numbers
    '&': '&',
    'é': 'é',
    '"': '"',
    "'": "'",
    '(': ')',
    '§': '-',
    'è': 'è',
    '!': '_',
    'ç': 'ç',
    'à': 'à',
    ')': '(',
    '-': '=',
    
    // Arabic to AZERTY (reverse mapping)
    'ض': 'a',
    'ص': 'z',
    'ث': 'e',
    'ق': 'r',
    'ف': 't',
    'غ': 'y',
    'ع': 'u',
    'ه': 'i',
    'خ': 'o',
    'ح': 'p',
    'ج': '^',
    'د': '$',
    'ش': 'q',
    'س': 's',
    'ي': 'd',
    'ب': 'f',
    'ل': 'g',
    'ا': 'h',
    'ت': 'j',
    'ن': 'k',
    'م': 'l',
    'ك': 'm',
    'ط': 'ù',
    'ذ': '`',
    '\\': '<',
    'ئ': 'w',
    'ء': 'x',
    'ؤ': 'c',
    'ر': 'v',
    'لا': 'b',
    'ى': 'n',
    'ة': ',',
    'و': ';',
    'ز': ':',
    'ظ': '!',
    
    
    // Arabic numbers to AZERTY
    '&': '&',
    'é': 'é',
    '"': '"',
    "'": "'",
    ')': '(',
    '-': '§',
    'è': 'è',
    '_': '!',
    'ç': 'ç',
    'à': 'à',
    '(': ')',
    '=': '-'
  }
};


// Get equivalent key based on current layout
export function getEquivalentKey(key, currentLayout) {  
  key = key.toLowerCase();
  const mapping = KEY_MAPPING[currentLayout];
  
  if (!mapping) {
    console.log('[Constants] No mapping found for layout:', currentLayout);
    return key;
  }
  
  const equivalentKey = mapping[key];
  console.log('[Constants] Found equivalent:', equivalentKey || key);
  
  return equivalentKey || key;
}