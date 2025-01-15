// ===== Video Detection Utils =====

const SUPPORTED_PLATFORMS = ['www.youtube.com','www.netflix.com', 'www.primevideo.com', 'www.disneyplus.com'];

export function isVideoPlayerURL(url) {
    if (isYouTube(url) || isNetflix(url) || isDisneyPlus(url)) {
      return 1;
    }
    
    else if (isPrimeVideo(url)) {
      return 2;
    }
    
    // If not supported platform, handle it as iframe detection (3) 
    return SUPPORTED_PLATFORMS.includes(url.split('/')[2]) ? 0 : 3; 
}


function isYouTube(url) {
    return url.includes('youtube.com/watch') || url.includes('youtube.com/shorts');
}

function isNetflix(url) {
    return url.includes('netflix.com/watch') && !url.includes('miniDpPlayButton');
}

function isDisneyPlus(url) {
    return url.includes('disneyplus.com') && url.includes('play');
}

function isPrimeVideo(url) {
    return url.includes('primevideo.com') && url.includes('detail');
}