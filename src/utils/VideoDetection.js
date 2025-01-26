// ===== Video Detection Utils =====

const SUPPORTED_PLATFORMS = ['www.youtube.com','www.netflix.com', 'www.primevideo.com', 'www.disneyplus.com'];

const firstHandlingCheckers = [youtube, netflix, disneyPlus, coursera];
const secondHandlingCheckers = [primeVideo];

/**
 * Check if the URL is a video player URL
 * @param {string} url - The URL to check
 * @returns {number} - 0: no video player, 1: first handling platform, 2: second handling platform, -1: iframe
 */
export function isVideoPlayerURL(url) {
    if (firstHandlingCheckers.some(checker => checker(url))) return 1;
    
    if (secondHandlingCheckers.some(checker => checker(url))) return 2;
    
    url = url.split('/')[2]; // Get the domain
    return SUPPORTED_PLATFORMS.includes(url) ? 0 : -1; // If the domain is in the supported platforms, return 0 (no video player), else return -1 (iframe)
}


function youtube(url) {
    return url.includes('youtube.com/watch') || url.includes('youtube.com/shorts');
}

function netflix(url) {
    return url.includes('netflix.com/watch') && !url.includes('miniDpPlayButton');
}

function disneyPlus(url) {
    return url.includes('disneyplus.com') && url.includes('play');
}

function coursera(url) {
    return url.includes('coursera.org') && url.includes('lecture');
}

function primeVideo(url) {
    return url.includes('primevideo.com') && url.includes('detail');
}