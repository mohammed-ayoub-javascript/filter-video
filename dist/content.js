/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/VideoDetection.js */ "./src/utils/VideoDetection.js");
/* harmony import */ var _utils_KeyMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/KeyMapping.js */ "./src/utils/KeyMapping.js");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/**
 * Content Script: Handles video detection and filter functionality
 * Responsibilities:
 * - Detects video elements on supported streaming platforms
 * - Manages filter effect on detected videos
 * - Handles keyboard shortcuts for filter toggle
 * - Maintains connection with background script
 */

// ===== State Management =====
var videoDetectionAttempts = 0;
var MAX_ATTEMPTS = 60;
var lastDetectionTime = 0;
var DETECTION_COOLDOWN = 500; // 0.5 second cooldown between detections
var filterListenerAttached = false;
var isExtensionEnabled = true; // Default to true
var currentKeydownHandler = null; // Store keydown handler reference for removal
var videoElement = null;
var currentLayout = "QWERTY";
var equivalentKey = null;
var instagramFeedObserver = null;
var videoCheckRunning = false;
var currentShortcutKey = null;
var currentHandling = (0,_utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL)(location.href); // Store current handling type
var currentResetKey = null;
var equivalentResetKey = null;
var tiktokFeedObserver = null; // Add this with other state variables
var monitoringInterval = null;

// ===== Initialization =====
// Get initial extension state and shortcut key
chrome.runtime.sendMessage({
  type: 'GET_IS_ENABLED'
}, function (response) {
  isExtensionEnabled = response === null || response === void 0 ? void 0 : response.isEnabled;
  console.log('[Content] Extension state:', isExtensionEnabled);

  // Get both layout and shortcut in parallel
  chrome.runtime.sendMessage({
    type: 'GET_SHORTCUT'
  }, function (shortcutResponse) {
    currentShortcutKey = shortcutResponse === null || shortcutResponse === void 0 ? void 0 : shortcutResponse.key;
  });
  chrome.runtime.sendMessage({
    type: 'CONTENT_GET_KEYBOARD_LAYOUT'
  }, function (layoutResponse) {
    currentLayout = layoutResponse === null || layoutResponse === void 0 ? void 0 : layoutResponse.layout;
  });
  chrome.runtime.sendMessage({
    type: 'GET_RESET_KEY'
  }, function (resetResponse) {
    currentResetKey = resetResponse === null || resetResponse === void 0 ? void 0 : resetResponse.key;
  });
  if (isExtensionEnabled && currentHandling && currentHandling !== 5 && currentHandling !== 6) {
    videoDetectionAttempts = 0;
    setTimeout(checkForVideo, 1000);
  }
});

// ===== Helper Functions =====
// Helper function to get video element using consistent logic
function getVideoElement() {
  if (!isExtensionEnabled) return null;
  switch (currentHandling) {
    case -1:
      // Iframe detection for non supported platforms or direct video URLs
      // Check if it's a direct video page (body has only one video element)
      var bodyChildren = document.body.children;
      if (bodyChildren.length === 1 && bodyChildren[0].tagName === 'VIDEO') {
        var _video = bodyChildren[0];
        // Ensure video has a style attribute
        if (!_video.hasAttribute('style')) {
          _video.setAttribute('style', '');
        }
        return _video;
      }
      // Otherwise, look for iframe
      var iframes = document.querySelectorAll('iframe[src][allowfullscreen]');
      if (location.href.includes('youglish.com')) return iframes[0];
      var _iterator = _createForOfIteratorHelper(iframes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var iframe = _step.value;
          if (!iframe.src.includes('youtube.com')) {
            return iframe;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    case 1:
      // First handling platform
      return document.querySelector('video[src]');
    case 2:
      // Second handling platform
      var videos = document.querySelectorAll('video[src]');
      return videos.length > 1 ? videos[1] : null;
    case 3:
    case 6:
      // TikTok special handling
      // First try to find active article (/foryou route)
      var container = document.querySelector('article[style=""]');
      var video = (container === null || container === void 0 ? void 0 : container.querySelector('video')) || document.querySelector('video');
      if (video) {
        var _video$parentElement;
        // Go up three levels to find the container
        var videoContainer = (_video$parentElement = video.parentElement) === null || _video$parentElement === void 0 || (_video$parentElement = _video$parentElement.parentElement) === null || _video$parentElement === void 0 ? void 0 : _video$parentElement.parentElement;
        if (videoContainer) {
          // Remove background span
          var bgSpan = videoContainer.querySelector('span[style*="box-sizing: border-box"][style*="display: block"][style*="position: absolute"][style*="inset: 0px"]');
          if (bgSpan) {
            console.log('[Content] Found and removing TikTok background span in video container');
            bgSpan.remove();
          }
        }
        return video;
      }
      return null;
    case 4:
      // Instagram Reels special handling
      // Find the active image (one with xuzhngd class)
      var activeImg = document.querySelector('img.xz74otr.xuzhngd');
      if (activeImg) {
        // Go up to find the parent container and then find the video element
        var reelContainer = activeImg.parentElement;
        if (reelContainer) {
          var reelVideo = reelContainer.querySelector('video');
          if (reelVideo) {
            console.log('[Content] Found Instagram Reel video element');
            return reelVideo;
          }
        }
      }
      return null;
    case 5:
      // Instagram Feed special handling
      // Find article without the Play button div (currently playing video)
      var articles = document.querySelectorAll('article');
      var _iterator2 = _createForOfIteratorHelper(articles),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var article = _step2.value;
          var playDiv = article.querySelector('div[aria-label="Play"]');
          if (!playDiv) {
            var _video2 = article.querySelector('video');
            if (_video2 && _video2 !== videoElement) {
              console.log('[Content] Found Instagram Feed video element');
              return _video2;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return null;
    default:
      return null;
  }
}

// Helper function for safe runtime operations
function safeRuntime(callback) {
  try {
    callback();
  } catch (e) {
    if (e.message.includes('Extension context invalidated')) {
      console.log('[Content] Extension context invalid - this is normal during updates');
    } else {
      console.error('[Content] Unexpected error:', e);
    }
  }
}

// ===== Video Detection =====
function checkForVideo() {
  if (!isExtensionEnabled || videoCheckRunning) {
    console.log('[Content] Extension disabled or video check already running');
    return;
  }
  var currentTime = Date.now();
  if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) {
    console.log('[Content] Skipping detection - too soon after last detection');
    return;
  }
  videoCheckRunning = true;
  console.log('[Content] Checking for video on:', window.location.href);
  var video = getVideoElement();
  if (video) {
    if (video === videoElement && currentHandling !== 1 && currentHandling !== 6) {
      console.log('[Content] Video already found');
      videoCheckRunning = false;
      // Re-attach filter if not attached (handles edge cases)
      if (!filterListenerAttached) {
        attachFilterToggle(videoElement);
      }
      return true;
    }
    videoElement = video;
    videoDetectionAttempts = 0;
    lastDetectionTime = currentTime;

    // Set up filter toggle FIRST
    attachFilterToggle(videoElement);
    if (videoElement.style.filter) videoElement.style.filter = '';

    // THEN notify background about video detection
    console.log('[Content] Video found:', videoElement);
    safeRuntime(function () {
      chrome.runtime.sendMessage({
        type: 'VIDEO_DETECTED'
      });
    });

    // Set up continuous monitoring to keep the video element valid
    if (!monitoringInterval) {
      console.log('[Content] Setting up continuous video monitoring');
      monitoringInterval = setInterval(function () {
        // If video element no longer valid, restart detection
        if (!document.contains(videoElement)) {
          console.log('[Content] Video element no longer in DOM, restarting detection');
          videoElement = null;
          videoDetectionAttempts = 0;
          checkForVideo();
        }
      }, 5000); // Check every 5 seconds
    }
    videoCheckRunning = false;
    return true;
  }
  videoCheckRunning = false;
  videoDetectionAttempts++;
  if (videoDetectionAttempts < MAX_ATTEMPTS) {
    console.log('[Content] Video not found, retrying in 1 second');
    setTimeout(checkForVideo, 1000);
  } else {
    console.log('[Content] Max detection attempts reached');

    // Even after MAX_ATTEMPTS, set up a fallback monitoring interval
    // to catch videos that appear later
    if (!monitoringInterval) {
      console.log('[Content] Setting up fallback monitoring after MAX_ATTEMPTS');
      monitoringInterval = setInterval(function () {
        videoDetectionAttempts = 0;
        checkForVideo();
      }, 10000); // Check every 10 seconds
    }
  }
}

// ===== Filter Management =====
function attachFilterToggle(videoElement) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (filterListenerAttached) return;
  var shortcutKey = (key || currentShortcutKey).toLowerCase();
  equivalentKey = (0,_utils_KeyMapping_js__WEBPACK_IMPORTED_MODULE_1__.getEquivalentKey)(shortcutKey, currentLayout);
  equivalentResetKey = (0,_utils_KeyMapping_js__WEBPACK_IMPORTED_MODULE_1__.getEquivalentKey)(currentResetKey, currentLayout);
  currentKeydownHandler = function currentKeydownHandler(e) {
    if (isExtensionEnabled && (e.key.toLowerCase() === shortcutKey || e.key.toLowerCase() === equivalentKey)) {
      e.stopPropagation();
      chrome.runtime.sendMessage({
        type: 'TOGGLE_FILTER'
      });
    }
  };
  console.log('[Content] Attaching filter toggle with shortcut:', shortcutKey);
  document.addEventListener('keydown', currentKeydownHandler);
  filterListenerAttached = true;
  console.log('[Content] Attached filter toggle with shortcut:', shortcutKey);
  document.addEventListener('keydown', function (e) {
    // Only handle reset key if extension is enabled and key is set
    if (isExtensionEnabled && (e.key.toLowerCase() === currentResetKey || e.key.toLowerCase() === equivalentResetKey)) {
      chrome.runtime.sendMessage({
        type: 'QUICK_RESET'
      });
    }
  });
}

// ===== Message Handlers =====
chrome.runtime.onMessage.addListener(function (message) {
  // Listen for extension state changes
  if (message.type === 'TOGGLE_EXTENSION') {
    console.log('[Content] Extension state changed:', message.enabled);
    isExtensionEnabled = message.enabled;
    if (!isExtensionEnabled) {
      // Clean up when disabled
      videoElement = null;
      if (currentKeydownHandler) {
        console.log('[Content] Extension disabled, cleaning up filter toggle');
        document.removeEventListener('keydown', currentKeydownHandler);
        filterListenerAttached = false;
      }
    } else {
      // Start fresh detection when enabled
      console.log('[Content] Extension enabled, starting video detection');
      videoCheckRunning = false;
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200); // Start detection
      if (currentHandling === 5) {
        startInstagramFeedObserver();
      }
      if (currentHandling === 6) {
        startTiktokFeedObserver();
      }
    }
  }
  if (message.type === 'APPLY_FILTER') {
    if (videoElement) {
      console.log('[Content] Applying filter:', message);
      var filterValue = '';
      if (message.shouldFilter) {
        switch (message.filterType) {
          case 'blur':
            filterValue = "blur(".concat(message.intensity, "px)");
            break;
          case 'opacity':
            filterValue = "opacity(".concat(message.intensity, "%)");
            break;
        }
      }
      if (videoElement.style.filter !== filterValue) {
        videoElement.style.filter = filterValue;
        console.log('[Content] Video filter set to:', videoElement.style.filter);
      } else {
        console.log('[Content] Video filter already set to:', videoElement.style.filter);
      }
    } else {
      console.log('[Content] No video found to apply filter');
    }
  }
  if (message.type === 'UPDATE_SHORTCUT') {
    console.log('[Content] Updating shortcut to:', message.key);
    currentShortcutKey = message.key;

    // Remove old listener if exists
    if (currentKeydownHandler) {
      document.removeEventListener('keydown', currentKeydownHandler);
      filterListenerAttached = false;
      console.log('[Content] Removed old shortcut listener');
    }

    // Re-attach with new key if we have a video
    if (videoElement) {
      attachFilterToggle(videoElement, message.key);
      console.log('[Content] Attached new shortcut listener');
    } else {
      console.log('[Content] No video found for shortcut update');
    }
  }
  if (message.type === 'DETECTION_READY') {
    console.log('[Content] Detection ready signal received');
    if (currentHandling && currentHandling !== 5 && currentHandling !== 6) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
    }
  }
  if (message.type === 'CONTENT_UPDATE_KEYBOARD_LAYOUT') {
    console.log('[Content] Updating keyboard layout to:', message.layout);
    currentLayout = message.layout;
    // If we have an active video and filter, update the key mapping
    if (videoElement && filterListenerAttached) {
      // Remove old listener
      document.removeEventListener('keydown', currentKeydownHandler);
      filterListenerAttached = false;
      // Re-attach with new layout
      attachFilterToggle(videoElement, currentShortcutKey);
    }
  }
  if (message.type === 'UPDATE_RESET_KEY') {
    console.log('[Content] Updating reset key to:', message.key);
    currentResetKey = message.key; // Will be null when extension disabled
  }
  if (message.type === 'QUICK_RESET_STATE') {
    console.log('[Content] Quick reset state changed:', message.enabled);
    if (!message.enabled) {
      // Clean up when disabled
      videoElement = null;
      cleanupMonitoring();
      if (currentKeydownHandler) {
        console.log('[Content] Quick reset - temporarily removing filter toggle');
        document.removeEventListener('keydown', currentKeydownHandler);
        filterListenerAttached = false;
      }
    } else {
      // Start fresh detection when re-enabled
      console.log('[Content] Quick reset - re-enabling and starting video detection');
      videoCheckRunning = false;
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
      if (currentHandling === 5) {
        startInstagramFeedObserver();
      }
      if (currentHandling === 6) {
        startTiktokFeedObserver();
      }
    }
  }
});

// ===== URL Change Detection =====
var lastUrl = location.href;
new MutationObserver(function () {
  var currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    console.log('[Content] URL changed from:', lastUrl, 'to:', currentUrl);
    lastUrl = currentUrl;

    // Clean up monitoring on URL change
    cleanupMonitoring();
    var newHandling = (0,_utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL)(currentUrl);
    if (newHandling !== currentHandling) currentHandling = newHandling;
    if (currentHandling === 4) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
    }
    if (currentHandling === 5) {
      startInstagramFeedObserver();
    }
    if (currentHandling === 6) {
      startTiktokFeedObserver();
    }
  }
}).observe(document, {
  subtree: true,
  childList: true
});

// ===== Instagram Feed Observer =====
if (currentHandling === 5) {
  startInstagramFeedObserver();
} else if (currentHandling === 6) {
  startTiktokFeedObserver();
}
function startInstagramFeedObserver() {
  return _startInstagramFeedObserver.apply(this, arguments);
}
function _startInstagramFeedObserver() {
  _startInstagramFeedObserver = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var article, scrollContainer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // Setup observer for Instagram feed scrolling
          console.log('[Content] Setting up Instagram feed observer');
          while (!article) {
            article = document.querySelector('article');
          }
          scrollContainer = article.parentElement;
          if (scrollContainer) {
            instagramFeedObserver = new MutationObserver(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var currentTime;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    currentTime = Date.now();
                    if (!(currentTime - lastDetectionTime < DETECTION_COOLDOWN)) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return");
                  case 3:
                    console.log('[Content] Instagram feed observer triggered');
                    _context.next = 6;
                    return checkForVideo();
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
            instagramFeedObserver.observe(scrollContainer, {
              attributes: true,
              attributeFilter: ['style']
            });
          }
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _startInstagramFeedObserver.apply(this, arguments);
}
function startTiktokFeedObserver() {
  return _startTiktokFeedObserver.apply(this, arguments);
} // Add cleanup when URL changes or when extension is disabled
function _startTiktokFeedObserver() {
  _startTiktokFeedObserver = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var columnListContainer;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          console.log('[Content] Setting up TikTok feed observer');
        case 1:
          if (columnListContainer) {
            _context4.next = 8;
            break;
          }
          columnListContainer = document.querySelector('#column-list-container');
          if (columnListContainer) {
            _context4.next = 6;
            break;
          }
          _context4.next = 6;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 100);
          });
        case 6:
          _context4.next = 1;
          break;
        case 8:
          console.log('[Content] Found TikTok column-list-container');
          tiktokFeedObserver = new MutationObserver(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var currentTime;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  currentTime = Date.now();
                  if (!(currentTime - lastDetectionTime < DETECTION_COOLDOWN)) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return");
                case 3:
                  console.log('[Content] TikTok scroll detected');
                  _context3.next = 6;
                  return checkForVideo();
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
          tiktokFeedObserver.observe(columnListContainer, {
            childList: true // Watch for article changes
          });

          // Do initial video check
          videoDetectionAttempts = 0;
          setTimeout(checkForVideo, 200);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _startTiktokFeedObserver.apply(this, arguments);
}
function cleanupMonitoring() {
  if (monitoringInterval) {
    console.log('[Content] Cleaning up video monitoring');
    clearInterval(monitoringInterval);
    monitoringInterval = null;
  }
}

// ===== Export for Testing =====
if ( true && module.exports) {
  module.exports = {
    isVideoPlayerURL: _utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL,
    checkForVideo: checkForVideo
  };
}

/***/ }),

/***/ "./src/utils/KeyMapping.js":
/*!*********************************!*\
  !*** ./src/utils/KeyMapping.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEY_MAPPING: () => (/* binding */ KEY_MAPPING),
/* harmony export */   LAYOUTS: () => (/* binding */ LAYOUTS),
/* harmony export */   getEquivalentKey: () => (/* binding */ getEquivalentKey)
/* harmony export */ });
var _QWERTY, _AZERTY;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Keyboard layout mappings
var LAYOUTS = {
  QWERTY: 'QWERTY',
  AZERTY: 'AZERTY'
};

// Bidirectional mapping for each layout
var KEY_MAPPING = {
  'QWERTY': (_QWERTY = {
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
    '\\': '\\',
    '`': '٫',
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
    '§': 'ذ',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': "٤",
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠',
    '-': '-',
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
    'ط': "'"
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_QWERTY, "\\", '\\'), '٫', '`'), 'ئ', 'z'), 'ء', 'x'), 'ؤ', 'c'), 'ر', 'v'), 'لا', 'b'), 'ى', 'n'), 'ة', 'm'), 'و', ','), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_QWERTY, 'ز', '.'), 'ظ', '/'), 'ذ', '§'), '١', '1'), '٢', '2'), '٣', '3'), '٤', '4'), '٥', '5'), '٦', '6'), '٧', '7'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_QWERTY, '٨', '8'), '٩', '9'), '٠', '0'), "-", '-')),
  'AZERTY': (_AZERTY = {
    // Letters (English to Arabic)
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
    "ù": 'ط',
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
    '=': 'ظ',
    // Numbers (English to Arabic)
    '@': '>',
    '&': '&',
    'é': 'é',
    '"': '"',
    "'": "'",
    '(': ')',
    '-': '-',
    'è': 'è',
    '!': '_',
    'ç': 'ç',
    'à': 'à',
    ')': '(',
    // Arabic to English (reverse mapping)
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
    'ظ': '=',
    // Arabic numbers to English
    '>': '@'
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_AZERTY, "&", '&'), "\xE9", 'é'), "\"", '"'), "'", "'"), ")", '('), "-", '§'), "\xE8", 'è'), '_', '!'), "\xE7", 'ç'), "\xE0", 'à'), _defineProperty(_AZERTY, "(", ')'))
};

// Get equivalent key based on current layout
function getEquivalentKey(key, currentLayout) {
  key = key.toLowerCase();
  var mapping = KEY_MAPPING[currentLayout];
  if (!mapping) {
    console.log('[Constants] No mapping found for layout:', currentLayout);
    return key;
  }
  var equivalentKey = mapping[key];
  console.log('[Constants] Found equivalent:', equivalentKey || key);
  return equivalentKey || key;
}

/***/ }),

/***/ "./src/utils/VideoDetection.js":
/*!*************************************!*\
  !*** ./src/utils/VideoDetection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVideoPlayerURL: () => (/* binding */ isVideoPlayerURL)
/* harmony export */ });
// ===== Video Detection Utils =====

var SUPPORTED_PLATFORMS = ['www.youtube.com', 'www.netflix.com', 'www.primevideo.com', 'www.disneyplus.com', 'www.instagram.com', 'www.coursera.org', 'zeteo.com'];
var firstHandlingCheckers = [youtube, netflix, disneyplus, coursera, zeteo];
var secondHandlingCheckers = [primevideo];

/**
 * Check if the URL is a video player URL
 * @param {string} url - The URL to check
 * @returns {number} - 0: no video player, 1: first handling platform, 2: second handling platform, 3: tiktok (special handling), 4: instagram reels (special handling), 5: instagram feed (special handling), -1: iframe
 */
function isVideoPlayerURL(url) {
  if (firstHandlingCheckers.some(function (checker) {
    return checker(url);
  })) return 1;
  if (secondHandlingCheckers.some(function (checker) {
    return checker(url);
  })) return 2;

  // Special case for TikTok
  if (tiktokNoFeed(url)) return 3;

  // Special case for Instagram Reels
  if (instagramReels(url)) return 4;

  // get domain name
  url = url.split('/')[2];

  // Special case for Instagram Feed
  if (instagramFeed(url)) return 5;

  // Special case for TikTok Feed
  if (tiktokFeed(url)) return 6;
  console.log(url);
  return SUPPORTED_PLATFORMS.includes(url) ? 0 : -1; // If the domain is in the supported platforms, return 0 (no video player), else return -1 (iframe)
}
function youtube(url) {
  return url.includes('youtube.com/watch') || url.includes('youtube.com/shorts');
}
function netflix(url) {
  return url.includes('netflix.com/watch');
}
function disneyplus(url) {
  return url.includes('disneyplus.com') && url.includes('play');
}
function coursera(url) {
  return url.includes('coursera.org') && url.includes('lecture');
}
function zeteo(url) {
  return url.includes('zeteo.com/p');
}
function tiktokNoFeed(url) {
  return url.includes('tiktok.com/@');
}
function primevideo(url) {
  return url.includes('primevideo.com') && url.includes('detail');
}
function instagramReels(url) {
  return url.includes('instagram.com/reels');
}
function instagramFeed(url) {
  return url === 'www.instagram.com';
}
function tiktokFeed(url) {
  return url === 'www.tiktok.com';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=content.js.map