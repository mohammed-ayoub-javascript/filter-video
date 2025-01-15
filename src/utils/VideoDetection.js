// ===== Video Detection Utils =====

export function isVideoPlayerURL(url) {
    if (url.includes('youtube.com/watch') ||
        url.includes('youtube.com/shorts') ||
       (url.includes('netflix.com/watch') &&
        !url.includes('miniDpPlayButton'))) {
      return 1;
    }
    
    else if (url.includes('primevideo.com') &&
             url.includes('detail')) {
      return 2;
    }
    
    return 3; // Not a supported video player page, treat as iframe detection
}

