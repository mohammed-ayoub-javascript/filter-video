// ===== Video Detection Utils =====

export function isVideoPlayerURL(url) {
    let handling = 0;

    if (url.includes('youtube.com/watch') ||
        url.includes('youtube.com/shorts') ||
       (url.includes('netflix.com/watch') &&
        !url.includes('miniDpPlayButton'))) {
      handling = 1;
    }
    
    else if (url.includes('primevideo.com') &&
             url.includes('detail')) {
      handling = 2;
    }
    
    return handling;
}

