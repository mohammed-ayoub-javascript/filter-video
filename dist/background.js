/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/VideoDetection.js */ "./src/utils/VideoDetection.js");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Background Script: Manages extension state and coordinates between components
 * Responsibilities:
 * - Maintains video detection state across tabs
 * - Manages extension settings and persistence
 * - Coordinates messaging between popup and content scripts
 * - Keeps service worker alive for consistent functionality
 */

// ===== State Management =====
// Store tabs with detected videos: tabId -> { detected: boolean, filtered: boolean }
var detectedVideoTabs = new Map();

// Extension settings with defaults
var isExtensionEnabled; // Default to enabled
var filterShortcut; // Default shortcut key
var filterType; // Default filter type
var filterIntensity; // Default filter intensity
var filterOnDetection; // Default filter on detection
var keyboardLayout; // Default keyboard layout
var resetKey; // Default reset key

// ===== Initialization =====
// Function to manage alarm
function updateAlarm(enabled) {
  if (enabled) {
    chrome.alarms.create('keepAlive', {
      periodInMinutes: 0.05
    }); // Every 3 seconds for better reliability across different systems to prevent the extension from being killed
  } else {
    chrome.alarms.clear('keepAlive');
  }
}

/**
 * Updates the extension icon based on enabled state
 * @param {boolean} enabled - Whether the extension is enabled
 */
function updateIcon(enabled) {
  var iconPath = enabled ? 'icons/icon32.png' : 'icons/icon32-disabled.png';
  chrome.action.setIcon({
    path: iconPath
  });
}

// Load saved state and set up initial alarm
chrome.storage.local.get(['filterShortcut', 'filterIntensity', 'isEnabled', 'filterType', 'filterOnDetection', 'keyboardLayout', 'resetKey'], function (result) {
  var _result$isEnabled, _result$filterShortcu, _result$filterType, _result$filterIntensi, _result$filterOnDetec, _result$keyboardLayou, _result$resetKey;
  isExtensionEnabled = (_result$isEnabled = result.isEnabled) !== null && _result$isEnabled !== void 0 ? _result$isEnabled : true;
  filterShortcut = (_result$filterShortcu = result.filterShortcut) !== null && _result$filterShortcu !== void 0 ? _result$filterShortcu : ',';
  filterType = (_result$filterType = result.filterType) !== null && _result$filterType !== void 0 ? _result$filterType : 'blur';
  filterIntensity = (_result$filterIntensi = result.filterIntensity) !== null && _result$filterIntensi !== void 0 ? _result$filterIntensi : 50;
  filterOnDetection = (_result$filterOnDetec = result.filterOnDetection) !== null && _result$filterOnDetec !== void 0 ? _result$filterOnDetec : false;
  keyboardLayout = (_result$keyboardLayou = result.keyboardLayout) !== null && _result$keyboardLayou !== void 0 ? _result$keyboardLayou : 'QWERTY';
  resetKey = (_result$resetKey = result.resetKey) !== null && _result$resetKey !== void 0 ? _result$resetKey : 'r';
  console.log('[Background] Loaded extension state:', isExtensionEnabled);
  updateAlarm(isExtensionEnabled); // Set initial alarm state
  updateIcon(isExtensionEnabled); // Set initial icon state
});

// ===== Helper Functions =====
/**
 * Safely sends a message to a tab with error handling
 * @param {number} tabId - Target tab ID
 * @param {object} message - Message to send
 */
function safeSendMessage(tabId, message) {
  // First check if the tab exists and is ready
  chrome.tabs.get(tabId).then(function (tab) {
    if (tab.status === 'complete' && !tab.url.startsWith('chrome://')) {
      return chrome.tabs.sendMessage(tabId, message)["catch"](function () {
        // Silently ignore connection errors
      });
    }
  })["catch"](function () {
    // Silently ignore if tab doesn't exist
  });
}

/**
 * Safely broadcasts a message to the extension
 * @param {object} message - Message to broadcast
 */
function safeBroadcast(message) {
  chrome.runtime.sendMessage(message)["catch"](function () {
    // Silently ignore connection errors
  });
}

// Add helper function for Map logging at the top with other helper functions
function logDetectedTabs(action) {
  var tabId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (false) {} // Only run in development

  chrome.tabs.query({}, function (tabs) {
    var tabMap = {};
    detectedVideoTabs.forEach(function (state, id) {
      var tab = tabs.find(function (t) {
        return t.id === id;
      });
      tabMap[id] = {
        title: tab ? tab.title : 'Tab not found',
        state: state
      };
    });
    console.log("[Tab Map ".concat(action, "] Current tabs (").concat(detectedVideoTabs.size, "):"));
    console.table(tabMap);
    if (tabId) {
      var tab = tabs.find(function (t) {
        return t.id === tabId;
      });
      console.log("[Tab Map ".concat(action, "] Affected tab:"), tab ? tab.title : 'Tab not found', "(ID: ".concat(tabId, ")"));
    }
  });
}

// ===== Tab Event Handlers =====
// Handle tab switching (instant check, no detection needed)
chrome.tabs.onActivated.addListener(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(activeInfo) {
    var tab;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return chrome.tabs.get(activeInfo.tabId);
        case 2:
          tab = _context.sent;
          if ((0,_utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL)(tab.url)) {
            console.log('[Tab Switch] Video page:', tab.url);
            // Remove this log if tab is not yet detected
            if (detectedVideoTabs.has(tab.id)) {
              console.log('[Tab Switch] Video already detected in this tab');
            }
          }
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Handle URL changes within the same tab
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  console.log('[URL Change] History state updated:', details.url);
  if (details.frameId === 0) {
    // Only handle main frame updates
    // If NOT a video page, we should delete the entry
    if (!(0,_utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL)(details.url)) {
      console.log('[URL Change] Not a video page:', details.url);
      if (detectedVideoTabs.has(details.tabId)) {
        detectedVideoTabs["delete"](details.tabId);
        logDetectedTabs('URL_CHANGE_REMOVAL', details.tabId);
      }
      // Notify about video status change
      safeBroadcast({
        type: 'VIDEO_STATUS_CHANGED',
        tabId: details.tabId,
        hasVideo: false
      });
    } else {
      // Only send DETECTION_READY for video pages
      console.log('[URL Change] Video page detected, sending DETECTION_READY');
      chrome.tabs.sendMessage(details.tabId, {
        type: 'DETECTION_READY'
      })["catch"](function (error) {
        console.log('[URL Change] Could not send DETECTION_READY - normal for non-video pages');
      });
    }
  }
});

// ===== Message Handler =====
// Listen for messages
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var _sender$tab, _sender$tab2, _sender$tab3;
  console.log('[Background] Received message:', message);
  console.log('[Background] From:', sender === null || sender === void 0 || (_sender$tab = sender.tab) === null || _sender$tab === void 0 ? void 0 : _sender$tab.id);

  // Handle GET_VIDEO_STATUS (from popup) separately as it doesn't need tabId from sender
  if (message.type === 'GET_VIDEO_STATUS' && message.tabId) {
    var hasVideo = detectedVideoTabs.has(message.tabId);
    console.log('[Background] Video status request for tab:', message.tabId, 'Has video:', hasVideo);
    sendResponse({
      hasVideo: hasVideo
    });
    return true; // Keep message channel open
  }
  if (message.type === 'GET_FILTER_ON_DETECTION') {
    sendResponse({
      autoFilter: filterOnDetection
    });
    return true;
  }

  // Special handling for TOGGLE_EXTENSION as it comes from popup
  if (message.type === 'TOGGLE_EXTENSION') {
    isExtensionEnabled = message.enabled;
    chrome.storage.local.set({
      isEnabled: isExtensionEnabled
    });
    console.log('[Background] Extension toggled to:', isExtensionEnabled);
    updateIcon(isExtensionEnabled); // Update icon when state changes

    if (!isExtensionEnabled) {
      // Disable filter for all detected videos when extension is disabled
      var _iterator = _createForOfIteratorHelper(detectedVideoTabs.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            _tabId = _step$value[0],
            state = _step$value[1];
          console.log('[Background] Checking tab:', _tabId, 'State:', state);
          // Only disable filter if the video is currently filtered
          if (state.filtered) {
            console.log('[Background] Removing filter from tab:', _tabId);
            safeSendMessage(_tabId, {
              type: 'APPLY_FILTER',
              shouldFilter: false,
              intensity: filterIntensity,
              filterType: filterType
            });
          }
        }
        // Notify all tabs to disable reset key
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          return safeSendMessage(tab.id, {
            type: 'UPDATE_RESET_KEY',
            key: null // Set to null when disabled
          });
        });
      });
      // Clear the detection map after sending disable filter messages
      detectedVideoTabs.clear();
      logDetectedTabs('DISABLING');
    } else {
      // When re-enabling, restore reset key
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          return safeSendMessage(tab.id, {
            type: 'UPDATE_RESET_KEY',
            key: resetKey
          });
        });
      });
    }
    // send the message to all tabs to update their isExtensionEnabled state
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
        return safeSendMessage(tab.id, {
          type: 'TOGGLE_EXTENSION',
          enabled: isExtensionEnabled
        });
      });
    });
    updateAlarm(isExtensionEnabled);
    sendResponse({
      success: true,
      isEnabled: isExtensionEnabled
    });
    return true;
  }
  if (message.type === 'TOGGLE_FILTER_ON_DETECTION') {
    filterOnDetection = message.enabled;
    chrome.storage.local.set({
      filterOnDetection: filterOnDetection
    });
    console.log('[Background] Filter on detection toggled to:', filterOnDetection);
    return true;
  }
  var tabId = (_sender$tab2 = sender.tab) === null || _sender$tab2 === void 0 ? void 0 : _sender$tab2.id;
  console.log('[Background] Processing message for tab:', tabId);

  // Handle content script messages
  switch (message.type) {
    case 'VIDEO_DETECTED':
      if (!isExtensionEnabled) {
        console.log('[Background] Extension disabled, ignoring video detection');
        return;
      }
      console.log('[Background] Video detected in tab:', tabId);
      // Initialize with both detected and blur state
      detectedVideoTabs.set(tabId, {
        detected: true,
        filtered: filterOnDetection // Initialize filter state
      });
      logDetectedTabs('DETECTION', tabId);
      if (filterOnDetection) {
        safeSendMessage(tabId, {
          type: 'APPLY_FILTER',
          shouldFilter: true,
          intensity: filterIntensity,
          filterType: filterType
        });
      }

      // Broadcast to popup
      safeBroadcast({
        type: 'VIDEO_DETECTED',
        tabId: tabId
      });
      break;
    case 'TOGGLE_FILTER':
      var _state = detectedVideoTabs.get(tabId);
      console.log('[Background] Before toggle - Tab state:', _state);
      if (_state) {
        _state.filtered = !_state.filtered; // Toggle filter state
        detectedVideoTabs.set(tabId, _state);
        console.log('[Background] After toggle New filtered:', _state.filtered);
        safeSendMessage(tabId, {
          type: 'APPLY_FILTER',
          shouldFilter: _state.filtered,
          intensity: filterIntensity,
          filterType: filterType
        });
      }
      break;
    case 'UPDATE_SHORTCUT':
      console.log('[Background] Updating shortcut key to:', message.key);
      filterShortcut = message.key;
      // Save to storage
      chrome.storage.local.set({
        filterShortcut: message.key
      });
      // Notify only tabs with videos
      chrome.tabs.query({}, function (tabs) {
        console.log('[Background] Broadcasting shortcut update to video tabs');
        tabs.forEach(function (tab) {
          if (detectedVideoTabs.has(tab.id)) {
            safeSendMessage(tab.id, {
              type: 'UPDATE_SHORTCUT',
              key: filterShortcut
            });
          }
        });
      });
      break;
    case 'GET_SHORTCUT':
      sendResponse({
        key: filterShortcut
      });
      return true;
    // Keep message channel open

    case 'GET_IS_ENABLED':
      sendResponse({
        isEnabled: isExtensionEnabled
      });
      return true;
    // Keep message channel open

    case 'GET_FILTER_INTENSITY':
      sendResponse({
        intensity: filterIntensity
      });
      return true;
    // Keep message channel open

    case 'UPDATE_FILTER_INTENSITY':
      console.log('[Background] Updating filter intensity to:', message.intensity);
      filterIntensity = message.intensity;
      // Save to storage
      chrome.storage.local.set({
        filterIntensity: message.intensity
      });
      // Update any active filtered videos
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          var state = detectedVideoTabs.get(tab.id);
          if (state !== null && state !== void 0 && state.filtered) {
            safeSendMessage(tab.id, {
              type: 'APPLY_FILTER',
              shouldFilter: true,
              intensity: filterIntensity,
              filterType: filterType
            });
          }
        });
      });
      break;
    case 'GET_FILTER_TYPE':
      sendResponse({
        filterType: filterType
      });
      return true;
    // Keep message channel open

    case 'UPDATE_FILTER_TYPE':
      console.log('[Background] Updating filter type to:', message.filterType);
      filterType = message.filterType;
      // Save to storage
      chrome.storage.local.set({
        filterType: message.filterType
      });
      // Update any active filtered videos
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          var state = detectedVideoTabs.get(tab.id);
          if (state !== null && state !== void 0 && state.filtered) {
            safeSendMessage(tab.id, {
              type: 'APPLY_FILTER',
              shouldFilter: true,
              intensity: filterIntensity,
              filterType: filterType
            });
          }
        });
      });
      break;
    case 'POPUP_GET_KEYBOARD_LAYOUT':
    case 'CONTENT_GET_KEYBOARD_LAYOUT':
      sendResponse({
        layout: keyboardLayout
      });
      return true;
    case 'POPUP_UPDATE_KEYBOARD_LAYOUT':
      console.log('[Background] Updating keyboard layout to:', message.layout);
      keyboardLayout = message.layout;
      chrome.storage.local.set({
        keyboardLayout: message.layout
      });
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          if (detectedVideoTabs.has(tab.id)) {
            safeSendMessage(tab.id, {
              type: 'CONTENT_UPDATE_KEYBOARD_LAYOUT',
              layout: keyboardLayout
            });
          }
        });
      });
      break;
    case 'GET_RESET_KEY':
      sendResponse({
        key: resetKey
      });
      return true;
    case 'UPDATE_RESET_KEY':
      console.log('[Background] Updating reset key to:', message.key);
      resetKey = message.key;
      chrome.storage.local.set({
        resetKey: message.key
      });
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          if (detectedVideoTabs.has(tab.id)) {
            safeSendMessage(tab.id, {
              type: 'UPDATE_RESET_KEY',
              key: resetKey
            });
          }
        });
      });
      break;
    case 'QUICK_RESET':
      // Only handle if extension is enabled and we have the tab ID
      if (isExtensionEnabled && (_sender$tab3 = sender.tab) !== null && _sender$tab3 !== void 0 && _sender$tab3.id) {
        console.log('[Background] Quick reset triggered for tab:', sender.tab.id);
        var _tabId2 = sender.tab.id;

        // Only reset this specific tab
        safeSendMessage(_tabId2, {
          type: 'QUICK_RESET_STATE',
          enabled: false
        });

        // Re-enable after delay for this tab only
        setTimeout(function () {
          safeSendMessage(_tabId2, {
            type: 'QUICK_RESET_STATE',
            enabled: true
          });
        }, 500);
      }
      break;
  }
});

// ===== Cleanup and Maintenance =====
// Clean up when tab is closed
chrome.tabs.onRemoved.addListener(function (tabId) {
  if (detectedVideoTabs.has(tabId)) {
    console.log('[Tab Closed] Removing detected video for tab:', tabId);
    detectedVideoTabs["delete"](tabId);
    logDetectedTabs('REMOVAL', tabId);
  }
});

// Keep alive handler
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === 'keepAlive') {
    // Check if extension is enabled
    chrome.storage.local.get(['isEnabled'], function (result) {
      if (result.isEnabled) {
        console.log('[Background] Extension active');
      }
    });
  }
});

// Export for testing
if ( true && module.exports) {
  module.exports = {
    isVideoPlayerURL: _utils_VideoDetection_js__WEBPACK_IMPORTED_MODULE_0__.isVideoPlayerURL,
    detectedVideoTabs: detectedVideoTabs
  };
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map