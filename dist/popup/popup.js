/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup/popup.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup/popup.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%2364b5f6%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e */ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%2364b5f6%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.6);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(33, 150, 243, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0);
    transform: scale(1);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes glow {
  0% {
    text-shadow: 0 0 5px rgba(33, 150, 243, 0.7);
  }
  50% {
    text-shadow: 0 0 15px rgba(33, 150, 243, 0.9);
  }
  100% {
    text-shadow: 0 0 5px rgba(33, 150, 243, 0.7);
  }
}
body {
  width: 300px;
  padding: 20px;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #121212 0%, #0d0d0d 100%);
  color: #ffffff;
  margin: 0;
  position: relative;
  overflow: hidden;
}
body::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  background: radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, transparent 70%);
  z-index: -1;
  animation: rotate 20s linear infinite;
}

.hidden {
  display: none !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(33, 150, 243, 0.3);
  position: relative;
}
.header::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 30%;
  height: 2px;
  background: #2196F3;
  border-radius: 2px;
  transition: all 0.4s ease;
}
.header .brand {
  font-size: 22px;
  font-weight: 700;
  color: #2196F3;
  text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
  letter-spacing: -0.5px;
  animation: glow 3s infinite;
  display: flex;
  align-items: center;
  gap: 8px;
}
.header .brand-dot {
  display: block;
  width: 8px;
  height: 8px;
  background: #2196F3;
  border-radius: 50%;
  box-shadow: 0 0 8px #2196F3;
}
.header .header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header .header-controls .icon-button {
  background: rgba(30, 30, 30, 0.7);
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  color: #b0b0b0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  backdrop-filter: blur(4px);
}
.header .header-controls .icon-button:hover {
  background: #2196F3;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}
.header .header-controls .icon-button svg {
  width: 18px;
  height: 18px;
}
.header .header-controls .switch-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

#status {
  font-size: 14px;
  padding: 10px 15px;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 3px solid #2196F3;
  animation: fadeIn 0.5s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#shortcut-container {
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 15px;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.6s ease;
}
#shortcut-container #shortcut-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  min-width: 80px;
  border: 1px solid #2196F3;
  border-radius: 8px;
  font-family: "SF Mono", "Courier New", monospace;
  cursor: pointer;
  background: rgba(13, 71, 161, 0.2);
  color: #64b5f6;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}
#shortcut-container #shortcut-key::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.2), transparent);
  transform: translateX(-100%);
}
#shortcut-container #shortcut-key:hover {
  background: rgba(33, 150, 243, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}
#shortcut-container #shortcut-key:hover::before {
  animation: shine 1.5s infinite;
}
#shortcut-container #shortcut-key.listening {
  background: #2196F3;
  color: white;
  animation: pulse 1.5s infinite;
}

@keyframes shine {
  100% {
    transform: translateX(100%);
  }
}
#intensity-container {
  background: rgba(30, 30, 30, 0.7);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.7s ease;
}
#intensity-container label {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}
#intensity-container label span {
  color: #64b5f6;
}
#intensity-container #filter-intensity {
  width: 100%;
  margin: 12px 0;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  background: linear-gradient(90deg, #0d47a1, #2196F3);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
}
#intensity-container #filter-intensity::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #2196F3;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.7);
}
#intensity-container #filter-intensity::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px #2196F3;
}
#intensity-container #intensity-value {
  font-size: 13px;
  text-align: center;
  color: #64b5f6;
  font-weight: 600;
  margin-top: 10px;
  display: block;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e1e1e;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 34px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
}
.switch .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.switch input:checked + .slider {
  background: linear-gradient(90deg, #0d47a1, #2196F3);
}
.switch input:checked + .slider:before {
  transform: translateX(24px);
  background-color: white;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.8);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(33, 150, 243, 0.2);
  font-size: 12px;
  animation: fadeIn 1s ease;
}
.footer a {
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 6px;
}
.footer a:hover {
  color: #2196F3;
  background: rgba(33, 150, 243, 0.1);
  transform: translateY(-2px);
}
.footer a:hover svg {
  fill: #2196F3;
}
.footer a svg {
  width: 14px;
  height: 14px;
  fill: #b0b0b0;
  transition: all 0.3s ease;
}

.view {
  display: none;
  animation: fadeIn 0.4s ease;
}
.view.active {
  display: block;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64b5f6;
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  border-radius: 8px;
}
.back-button:hover {
  color: #2196F3;
  background: rgba(33, 150, 243, 0.1);
  transform: translateX(-5px);
}
.back-button:hover svg {
  transform: translateX(-3px);
}
.back-button svg {
  transition: transform 0.3s ease;
  width: 16px;
  height: 16px;
}

.donate-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}
.donate-options .donate-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px;
  background: rgba(30, 30, 30, 0.7);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}
.donate-options .donate-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
}
.donate-options .donate-button:hover {
  background: rgba(33, 150, 243, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(33, 150, 243, 0.3);
}
.donate-options .donate-button:hover::before {
  animation: shine 1.5s infinite;
}
.donate-options .donate-button:hover .donate-icon {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 8px rgba(33, 150, 243, 0.6));
}
.donate-options .donate-button .donate-icon {
  width: 28px;
  height: 28px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.donate-options .donate-button .donate-text {
  flex-grow: 1;
  text-align: left;
}
.donate-options .donate-button .donate-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.custom-select {
  position: relative;
  display: inline-block;
}

.filter-select {
  display: inline-block;
  padding: 8px 32px 8px 12px;
  border: 1px solid rgba(33, 150, 243, 0.5);
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: rgba(13, 71, 161, 0.2);
  color: #64b5f6;
  transition: all 0.3s ease;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  width: 110px;
  text-align: left;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.filter-select:hover {
  border-color: #2196F3;
  background: rgba(33, 150, 243, 0.2);
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.2);
}

.select-items {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  z-index: 100;
  background: #1e1e1e;
  border: 1px solid #2196F3;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(10px);
}
.select-items .select-item {
  padding: 10px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  font-size: 14px;
  background: transparent;
}
.select-items .select-item:hover {
  background: rgba(33, 150, 243, 0.2) !important;
  color: #64b5f6 !important;
  padding-left: 15px;
}
.select-items .select-item.selected {
  background: rgba(33, 150, 243, 0.3) !important;
  color: #64b5f6 !important;
  font-weight: 600;
}

#settingsView .settings-content {
  margin-top: 10px;
  animation: fadeIn 0.5s ease;
}
#settingsView .setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  font-size: 14px;
  color: #ffffff;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  transition: all 0.3s ease;
}
#settingsView .setting-item:hover {
  background: rgba(33, 150, 243, 0.05);
  border-radius: 8px;
  padding: 14px 10px;
}
#settingsView .setting-item span {
  margin-right: 15px;
  line-height: 1.5;
  color: #b0b0b0;
}
#settingsView .checkbox {
  position: relative;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}
#settingsView .checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
#settingsView .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 6px;
  border: 1px solid rgba(33, 150, 243, 0.5);
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
#settingsView .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
#settingsView .checkbox:hover input ~ .checkmark {
  border-color: #2196F3;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.2);
}
#settingsView .checkbox input:checked ~ .checkmark {
  background: #2196F3;
  border-color: #2196F3;
}
#settingsView .checkbox input:checked ~ .checkmark:after {
  display: block;
}
#settingsView #reset-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border: 1px solid rgba(33, 150, 243, 0.5);
  border-radius: 8px;
  font-family: "SF Mono", "Courier New", monospace;
  font-size: 13px;
  cursor: pointer;
  background: rgba(13, 71, 161, 0.2);
  color: #64b5f6;
  transition: all 0.3s ease;
  font-weight: 600;
  min-width: 80px;
  backdrop-filter: blur(4px);
}
#settingsView #reset-key:hover {
  background: rgba(33, 150, 243, 0.3);
  border-color: #2196F3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
}
#settingsView #reset-key.listening {
  background: #2196F3;
  color: white;
  animation: pulse 1.5s infinite;
}
#settingsView .language-buttons {
  display: flex;
  gap: 8px;
}
#settingsView .language-buttons .lang-button {
  text-decoration: none;
}
#settingsView .language-buttons .lang-key {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(30, 30, 30, 0.7);
  color: #b0b0b0;
  font-size: 13px;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(33, 150, 243, 0.2);
}
#settingsView .language-buttons .lang-key:hover {
  background: rgba(33, 150, 243, 0.2);
  color: #64b5f6;
}
#settingsView .language-buttons .lang-key.active {
  background: rgba(33, 150, 243, 0.3);
  color: #64b5f6;
  border-color: #2196F3;
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #2196F3;\n$primary-light: #64b5f6;\n$primary-dark: #0d47a1;\n$bg-color: #121212;\n$bg-card: #1e1e1e;\n$bg-hover: #2a2a2a;\n$text-color: #ffffff;\n$text-secondary: #b0b0b0;\n$border-color: #333;\n$success: #4CAF50;\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.6);\n    transform: scale(1);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(33, 150, 243, 0);\n    transform: scale(1.05);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0);\n    transform: scale(1);\n  }\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes glow {\n  0% { text-shadow: 0 0 5px rgba(33, 150, 243, 0.7); }\n  50% { text-shadow: 0 0 15px rgba(33, 150, 243, 0.9); }\n  100% { text-shadow: 0 0 5px rgba(33, 150, 243, 0.7); }\n}\n\n\n\nbody {\n  width: 300px;\n  padding: 20px;\n  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;\n  background: linear-gradient(135deg, $bg-color 0%, #0d0d0d 100%);\n  color: $text-color;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n  \n  &::before {\n    content: '';\n    position: absolute;\n    top: -50%;\n    left: -50%;\n    width: 200%;\n    background: radial-gradient(\n      circle at center,\n      rgba(33, 150, 243, 0.1) 0%,\n      transparent 70%\n    );\n    z-index: -1;\n    animation: rotate 20s linear infinite;\n  }\n}\n\n.hidden {\n  display: none !important;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid rgba($primary-color, 0.3);\n  position: relative;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    width: 30%;\n    height: 2px;\n    background: $primary-color;\n    border-radius: 2px;\n    transition: all 0.4s ease;\n  }\n\n  .brand {\n    font-size: 22px;\n    font-weight: 700;\n    color: $primary-color;\n    text-shadow: 0 0 10px rgba($primary-color, 0.5);\n    letter-spacing: -0.5px;\n    animation: glow 3s infinite;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  \n  .brand-dot {\n    display: block;\n    width: 8px;\n    height: 8px;\n    background: $primary-color;\n    border-radius: 50%;\n    box-shadow: 0 0 8px $primary-color;\n  }\n\n  .header-controls {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n\n    .icon-button {\n      background: rgba($bg-card, 0.7);\n      border: none;\n      border-radius: 50%;\n      padding: 6px;\n      cursor: pointer;\n      color: $text-secondary;\n      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 32px;\n      height: 32px;\n      backdrop-filter: blur(4px);\n\n      &:hover {\n        background: $primary-color;\n        color: white;\n        transform: translateY(-2px);\n        box-shadow: 0 4px 12px rgba($primary-color, 0.3);\n      }\n\n      svg {\n        width: 18px;\n        height: 18px;\n      }\n    }\n    \n    .switch-container {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n  }\n}\n\n#status {\n  font-size: 14px;\n  padding: 10px 15px;\n  background: rgba($bg-card, 0.7);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  border-left: 3px solid $primary-color;\n  animation: fadeIn 0.5s ease;\n  backdrop-filter: blur(4px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n#shortcut-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 15px;\n  background: rgba($bg-card, 0.7);\n  border-radius: 12px;\n  backdrop-filter: blur(4px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  animation: fadeIn 0.6s ease;\n\n  #shortcut-key {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px 15px;\n    min-width: 80px;\n    border: 1px solid $primary-color;\n    border-radius: 8px;\n    font-family: 'SF Mono', 'Courier New', monospace;\n    cursor: pointer;\n    background: rgba($primary-dark, 0.2);\n    color: $primary-light;\n    transition: all 0.3s ease;\n    font-weight: 600;\n    letter-spacing: 1px;\n    position: relative;\n    overflow: hidden;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(90deg, \n        transparent, \n        rgba($primary-color, 0.2), \n        transparent\n      );\n      transform: translateX(-100%);\n    }\n\n    &:hover {\n      background: rgba($primary-color, 0.3);\n      transform: translateY(-2px);\n      box-shadow: 0 4px 12px rgba($primary-color, 0.3);\n      \n      &::before {\n        animation: shine 1.5s infinite;\n      }\n    }\n\n    &.listening {\n      background: $primary-color;\n      color: white;\n      animation: pulse 1.5s infinite;\n    }\n  }\n}\n\n@keyframes shine {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n#intensity-container {\n  background: rgba($bg-card, 0.7);\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  backdrop-filter: blur(4px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  animation: fadeIn 0.7s ease;\n\n  label {\n    display: block;\n    margin-bottom: 12px;\n    font-size: 14px;\n    font-weight: 500;\n    display: flex;\n    justify-content: space-between;\n    \n    span {\n      color: $primary-light;\n    }\n  }\n\n  #filter-intensity {\n    width: 100%;\n    margin: 12px 0;\n    -webkit-appearance: none;\n    appearance: none;\n    height: 6px;\n    background: linear-gradient(90deg, $primary-dark, $primary-color);\n    border-radius: 10px;\n    outline: none;\n    cursor: pointer;\n    \n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 20px;\n      height: 20px;\n      background: white;\n      border-radius: 50%;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      border: 2px solid $primary-color;\n      box-shadow: 0 0 10px rgba($primary-color, 0.7);\n      \n      &:hover {\n        transform: scale(1.2);\n        box-shadow: 0 0 15px $primary-color;\n      }\n    }\n  }\n\n  #intensity-value {\n    font-size: 13px;\n    text-align: center;\n    color: $primary-light;\n    font-weight: 600;\n    margin-top: 10px;\n    display: block;\n  }\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 26px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: $bg-card;\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    border-radius: 34px;\n    box-shadow: inset 0 0 5px rgba(0,0,0,0.3);\n\n    &:before {\n      position: absolute;\n      content: '';\n      height: 20px;\n      width: 20px;\n      left: 3px;\n      bottom: 3px;\n      background-color: white;\n      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      border-radius: 50%;\n      box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n    }\n  }\n\n  input:checked + .slider {\n    background: linear-gradient(90deg, $primary-dark, $primary-color);\n  }\n\n  input:checked + .slider:before {\n    transform: translateX(24px);\n    background-color: white;\n    box-shadow: 0 0 10px rgba($primary-color, 0.8);\n  }\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid rgba($primary-color, 0.2);\n  font-size: 12px;\n  animation: fadeIn 1s ease;\n\n  a {\n    color: $text-secondary;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 6px 10px;\n    border-radius: 6px;\n    \n    &:hover {\n      color: $primary-color;\n      background: rgba($primary-color, 0.1);\n      transform: translateY(-2px);\n      \n      svg {\n        fill: $primary-color;\n      }\n    }\n\n    svg {\n      width: 14px;\n      height: 14px;\n      fill: $text-secondary;\n      transition: all 0.3s ease;\n    }\n  }\n}\n\n.view {\n  display: none;\n  animation: fadeIn 0.4s ease;\n\n  &.active {\n    display: block;\n  }\n}\n\n.back-button {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: $primary-light;\n  background: none;\n  border: none;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  margin-bottom: 15px;\n  border-radius: 8px;\n  \n  &:hover {\n    color: $primary-color;\n    background: rgba($primary-color, 0.1);\n    transform: translateX(-5px);\n    \n    svg {\n      transform: translateX(-3px);\n    }\n  }\n\n  svg {\n    transition: transform 0.3s ease;\n    width: 16px;\n    height: 16px;\n  }\n}\n\n.donate-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 20px;\n\n  .donate-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    padding: 15px;\n    background: rgba($bg-card, 0.7);\n    border: none;\n    border-radius: 12px;\n    color: $text-color;\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 500;\n    backdrop-filter: blur(4px);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n    position: relative;\n    overflow: hidden;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(90deg, \n        transparent, \n        rgba(255,255,255,0.1), \n        transparent\n      );\n      transform: translateX(-100%);\n    }\n\n    &:hover {\n      background: rgba($primary-color, 0.2);\n      transform: translateY(-3px);\n      box-shadow: 0 6px 15px rgba($primary-color, 0.3);\n      \n      &::before {\n        animation: shine 1.5s infinite;\n      }\n      \n      .donate-icon {\n        transform: scale(1.1) rotate(5deg);\n        filter: drop-shadow(0 0 8px rgba($primary-color, 0.6));\n      }\n    }\n\n    .donate-icon {\n      width: 28px;\n      height: 28px;\n      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    }\n\n    .donate-text {\n      flex-grow: 1;\n      text-align: left;\n    }\n\n    .donate-arrow {\n      width: 16px;\n      height: 16px;\n      opacity: 0.7;\n    }\n  }\n}\n\n.custom-select {\n  position: relative;\n  display: inline-block;\n}\n\n.filter-select {\n  display: inline-block;\n  padding: 8px 32px 8px 12px;\n  border: 1px solid rgba($primary-color, 0.5);\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  background: rgba($primary-dark, 0.2);\n  color: $primary-light;\n  transition: all 0.3s ease;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364b5f6'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  background-size: 16px;\n  appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  width: 110px;\n  text-align: left;\n  backdrop-filter: blur(4px);\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n  \n  &:hover {\n    border-color: $primary-color;\n    background: rgba($primary-color, 0.2);\n    box-shadow: 0 0 10px rgba($primary-color, 0.2);\n  }\n}\n\n.select-items {\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  background: $bg-card;\n  border: 1px solid $primary-color;\n  border-radius: 8px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: fadeIn 0.3s ease;\n  backdrop-filter: blur(10px);\n\n  .select-item {\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    color: $text-color;\n    font-size: 14px;\n    background: transparent;\n    \n    &:hover {\n      background: rgba($primary-color, 0.2) !important;\n      color: $primary-light !important;\n      padding-left: 15px;\n    }\n\n    &.selected {\n      background: rgba($primary-color, 0.3) !important;\n      color: $primary-light !important;\n      font-weight: 600;\n    }\n  }\n}\n\n#settingsView {\n  .settings-content {\n    margin-top: 10px;\n    animation: fadeIn 0.5s ease;\n  }\n\n  .setting-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 14px 0;\n    font-size: 14px;\n    color: $text-color;\n    border-bottom: 1px solid rgba($border-color, 0.3);\n    transition: all 0.3s ease;\n    \n    &:hover {\n      background: rgba($primary-color, 0.05);\n      border-radius: 8px;\n      padding: 14px 10px;\n    }\n\n    span {\n      margin-right: 15px;\n      line-height: 1.5;\n      color: $text-secondary;\n    }\n  }\n\n  .checkbox {\n    position: relative;\n    width: 22px;\n    height: 22px;\n    flex-shrink: 0;\n\n    input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer;\n      height: 0;\n      width: 0;\n    }\n  }\n\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 22px;\n    width: 22px;\n    background: rgba($bg-card, 0.7);\n    border-radius: 6px;\n    border: 1px solid rgba($primary-color, 0.5);\n    transition: all 0.3s ease;\n    backdrop-filter: blur(4px);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n\n    &:after {\n      content: \"\";\n      position: absolute;\n      display: none;\n      left: 7px;\n      top: 3px;\n      width: 5px;\n      height: 12px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      transform: rotate(45deg);\n    }\n  }\n\n  .checkbox:hover {\n    input ~ .checkmark {\n      border-color: $primary-color;\n      box-shadow: 0 0 10px rgba($primary-color, 0.2);\n    }\n  }\n\n  .checkbox input:checked {\n    ~ .checkmark {\n      background: $primary-color;\n      border-color: $primary-color;\n\n      &:after {\n        display: block;\n      }\n    }\n  }\n\n  #reset-key {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 6px 12px;\n    border: 1px solid rgba($primary-color, 0.5);\n    border-radius: 8px;\n    font-family: 'SF Mono', 'Courier New', monospace;\n    font-size: 13px;\n    cursor: pointer;\n    background: rgba($primary-dark, 0.2);\n    color: $primary-light;\n    transition: all 0.3s ease;\n    font-weight: 600;\n    min-width: 80px;\n    backdrop-filter: blur(4px);\n    \n    &:hover {\n      background: rgba($primary-color, 0.3);\n      border-color: $primary-color;\n      transform: translateY(-2px);\n      box-shadow: 0 4px 12px rgba($primary-color, 0.2);\n    }\n\n    &.listening {\n      background: $primary-color;\n      color: white;\n      animation: pulse 1.5s infinite;\n    }\n  }\n\n  .language-buttons {\n    display: flex;\n    gap: 8px;\n    \n    .lang-button {\n      text-decoration: none;\n    }\n    \n    .lang-key {\n      display: inline-block;\n      padding: 6px 12px;\n      border-radius: 6px;\n      background: rgba($bg-card, 0.7);\n      color: $text-secondary;\n      font-size: 13px;\n      transition: all 0.3s ease;\n      backdrop-filter: blur(4px);\n      border: 1px solid rgba($primary-color, 0.2);\n      \n      &:hover {\n        background: rgba($primary-color, 0.2);\n        color: $primary-light;\n      }\n      \n      &.active {\n        background: rgba($primary-color, 0.3);\n        color: $primary-light;\n        border-color: $primary-color;\n      }\n    }\n  }\n}\n\n// Redesign completed - Mohamed Ayoub, Mostaganem 27"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/popup/popup.scss":
/*!******************************!*\
  !*** ./src/popup/popup.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup/popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%2364b5f6%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%2364b5f6%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%2364b5f6%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup/popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.scss */ "./src/popup/popup.scss");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


/**
 * Popup Script: Manages the extension's popup UI and user interactions
 * Responsibilities:
 * - Displays and updates video detection status
 * - Handles shortcut key customization
 * - Controls filter intensity slider
 * - Manages extension enable/disable toggle
 */

// ===== Initialization =====
// Query current tab for video status
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
    tab = _ref2[0];
  // ===== UI Elements =====
  var status = document.getElementById('status');
  var shortcutContainer = document.getElementById('shortcut-container');
  var shortcutKey = document.getElementById('shortcut-key');
  var intensityContainer = document.getElementById('intensity-container');
  var intensitySlider = document.getElementById('filter-intensity');
  var intensityValue = document.getElementById('intensity-value');
  var enableSwitch = document.getElementById('enableSwitch');
  var mainView = document.getElementById('mainView');
  var donateView = document.getElementById('donateView');
  var supportButton = document.getElementById('supportButton');
  var backButton = document.querySelector('.back-button');

  // Updated filter type dropdown elements
  var filterSelect = document.getElementById('filter-type');
  var filterSelectItems = filterSelect.nextElementSibling;
  var autoFilterSwitch = document.getElementById('autoFilterSwitch');
  var settingsButton = document.getElementById('settingsButton');
  var settingsView = document.getElementById('settingsView');
  var settingsBackButton = document.querySelector('#settingsView .back-button');

  // Keyboard layout dropdown elements
  var keyboardLayoutSelect = document.getElementById('keyboard-layout');
  var keyboardLayoutItems = keyboardLayoutSelect.nextElementSibling;

  // Add to UI elements section
  var resetKey = document.getElementById('reset-key');

  // ===== Event Handlers =====
  // Add intensity slider handler
  intensitySlider.addEventListener('input', function () {
    var value = intensitySlider.value;
    intensityValue.textContent = "".concat(value, "%");
    chrome.runtime.sendMessage({
      type: 'UPDATE_FILTER_INTENSITY',
      intensity: parseInt(value)
    });
  });

  // Filter type dropdown handler
  filterSelect.addEventListener('click', function (e) {
    e.stopPropagation();
    filterSelectItems.classList.toggle('hidden');
    // Hide the currently selected option
    var currentValue = filterSelect.textContent;
    filterSelectItems.querySelectorAll('.select-item').forEach(function (item) {
      if (item.textContent === currentValue) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
        item.style.background = 'var(--bg-color)';
      }
    });
  });

  // Handle filter type selection
  filterSelectItems.querySelectorAll('.select-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      var value = item.dataset.value;
      filterSelect.textContent = value;
      filterSelectItems.classList.add('hidden');
      // Reset display of all items
      filterSelectItems.querySelectorAll('.select-item').forEach(function (i) {
        i.style.display = 'block';
      });
      chrome.runtime.sendMessage({
        type: 'UPDATE_FILTER_TYPE',
        filterType: value
      });
    });
  });

  // Close ALL dropdowns when clicking outside
  document.addEventListener('click', function () {
    filterSelectItems.classList.add('hidden');
    keyboardLayoutItems.classList.add('hidden');
  });
  console.log('[Popup] Opened for tab:', tab === null || tab === void 0 ? void 0 : tab.id);
  if (!tab) {
    status.textContent = 'Unable to determine video status';
    return;
  }

  // ===== Message Listeners =====
  // Listen for video status updates
  chrome.runtime.onMessage.addListener(function (message) {
    console.log('[Popup] Received message:', message);
    if (message.tabId === tab.id) {
      console.log('[Popup] Message matches current tab');
      if (message.type === 'VIDEO_DETECTED') {
        console.log('[Popup] Updating status: Video detected');
        status.textContent = 'Video detected in this page';
        shortcutContainer.classList.remove('hidden');
        intensityContainer.classList.remove('hidden');
      } else if (message.type === 'VIDEO_STATUS_CHANGED' && !message.hasVideo) {
        console.log('[Popup] Updating status: No video');
        status.textContent = 'No video detected in this page';
        shortcutContainer.classList.add('hidden');
        intensityContainer.classList.add('hidden');
      }
    }
  });

  // ===== Shortcut Key Management =====
  // Get current shortcut from background
  console.log('[Popup] Requesting current shortcut');
  chrome.runtime.sendMessage({
    type: 'GET_SHORTCUT'
  }, function (response) {
    console.log('[Popup] Received shortcut response:', response);
    if (chrome.runtime.lastError) {
      console.log('[Popup] Error getting shortcut:', chrome.runtime.lastError);
      shortcutKey.textContent = ','; // fallback to default
      return;
    }
    if (response !== null && response !== void 0 && response.key) {
      shortcutKey.textContent = response.key;
    }
  });

  // Handle shortcut key changes
  shortcutKey.addEventListener('click', function () {
    shortcutKey.classList.add('listening');
    shortcutKey.textContent = 'key'; // Shorter message

    // One-time keyboard listener
    var _keyHandler = function keyHandler(e) {
      e.preventDefault();
      if (e.key === 'Escape') {
        // Cancel shortcut change, revert to current shortcut
        chrome.runtime.sendMessage({
          type: 'GET_SHORTCUT'
        }, function (response) {
          shortcutKey.textContent = (response === null || response === void 0 ? void 0 : response.key) || ',';
        });
        shortcutKey.classList.remove('listening');
        document.removeEventListener('keydown', _keyHandler);
        return;
      }
      var newKey = e.key.toLowerCase();

      // Update UI immediately
      shortcutKey.textContent = newKey;
      shortcutKey.classList.remove('listening');

      // Inform background to update shortcut
      chrome.runtime.sendMessage({
        type: 'UPDATE_SHORTCUT',
        key: newKey
      }, function () {
        if (chrome.runtime.lastError) {
          console.log('[Popup] Error updating shortcut:', chrome.runtime.lastError);
          // Get current shortcut from background if update fails
          chrome.runtime.sendMessage({
            type: 'GET_SHORTCUT'
          }, function (response) {
            if (response !== null && response !== void 0 && response.key) {
              shortcutKey.textContent = response.key;
            } else {
              shortcutKey.textContent = ','; // fallback to default
            }
          });
        }
      });

      // Remove listener
      document.removeEventListener('keydown', _keyHandler);
    };
    document.addEventListener('keydown', _keyHandler);
  });

  // ===== Initial State Setup =====
  // Get initial status from background
  console.log('[Popup] Requesting initial video status');
  chrome.runtime.sendMessage({
    type: 'GET_VIDEO_STATUS',
    tabId: tab.id
  }, function (response) {
    console.log('[Popup] Received status response:', response);
    if (chrome.runtime.lastError) {
      console.log('[Popup] Error getting status:', chrome.runtime.lastError);
      status.textContent = 'Unable to determine video status';
      return;
    }
    if (response !== null && response !== void 0 && response.hasVideo) {
      console.log('[Popup] Initial status: Video detected');
      status.textContent = 'Video detected in this page';
      shortcutContainer.classList.remove('hidden');
      intensityContainer.classList.remove('hidden');
    } else {
      console.log('[Popup] Initial status: No video');
      status.textContent = 'No video detected in this page';
      shortcutContainer.classList.add('hidden');
      intensityContainer.classList.add('hidden');
    }
  });

  // Get initial intensity value
  chrome.runtime.sendMessage({
    type: 'GET_FILTER_INTENSITY'
  }, function (response) {
    if (response !== null && response !== void 0 && response.intensity) {
      intensitySlider.value = response.intensity;
      intensityValue.textContent = "".concat(response.intensity, "%");
    }
  });

  // Get initial auto-filter state
  console.log('[Popup] Requesting initial auto-filter state');
  chrome.runtime.sendMessage({
    type: 'GET_FILTER_ON_DETECTION'
  }, function (response) {
    var _response$autoFilter;
    if (chrome.runtime.lastError) {
      console.error('[Popup] Error getting auto-filter state:', chrome.runtime.lastError.message);
      return;
    }
    autoFilterSwitch.checked = (_response$autoFilter = response.autoFilter) !== null && _response$autoFilter !== void 0 ? _response$autoFilter : false;
  });

  // ===== Extension State Management =====
  // Load initial extension enabled state and show/hide UI accordingly
  chrome.runtime.sendMessage({
    type: 'GET_IS_ENABLED'
  }, function (response) {
    var _response$isEnabled;
    enableSwitch.checked = (_response$isEnabled = response.isEnabled) !== null && _response$isEnabled !== void 0 ? _response$isEnabled : true;
    if (response.isEnabled) {
      status.classList.remove('hidden');
    }
  });

  // Handle enable/disable switch
  enableSwitch.addEventListener('change', function (e) {
    console.log('[Popup] Switch toggled:', e.target.checked);
    if (!e.target.checked) {
      status.classList.add('hidden');
      shortcutContainer.classList.add('hidden');
      intensityContainer.classList.add('hidden');
    } else {
      status.classList.remove('hidden');
    }
    chrome.runtime.sendMessage({
      type: 'TOGGLE_EXTENSION',
      enabled: e.target.checked
    }, function (response) {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Toggle error:', chrome.runtime.lastError);
        return;
      }
      console.log('[Popup] Extension toggled response:', response);
    });
  });

  // ===== Settings View Management =====
  // Handle settings button click
  settingsButton.addEventListener('click', function () {
    console.log('[Popup] Opening settings view');
    mainView.classList.remove('active');
    settingsView.classList.add('active');

    // Get current auto-filter state
    chrome.runtime.sendMessage({
      type: 'GET_FILTER_ON_DETECTION'
    }, function (response) {
      var _response$autoFilter2;
      if (chrome.runtime.lastError) {
        console.error('[Popup] Auto-filter toggle error:', chrome.runtime.lastError.message);
        return;
      }
      autoFilterSwitch.checked = (_response$autoFilter2 = response.autoFilter) !== null && _response$autoFilter2 !== void 0 ? _response$autoFilter2 : false;
    });

    // Get current keyboard layout
    chrome.runtime.sendMessage({
      type: 'POPUP_GET_KEYBOARD_LAYOUT'
    }, function (response) {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Keyboard layout get error:', chrome.runtime.lastError.message);
        return;
      }
      keyboardLayoutSelect.textContent = response.layout;
    });

    // Get current reset key
    chrome.runtime.sendMessage({
      type: 'GET_RESET_KEY'
    }, function (response) {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Reset key get error:', chrome.runtime.lastError.message);
        return;
      }
      resetKey.textContent = response.key;
    });
  });

  // Handle settings back button
  settingsBackButton.addEventListener('click', function () {
    console.log('[Popup] Closing settings view');
    settingsView.classList.remove('active');
    mainView.classList.add('active');
  });

  // Handle auto-filter toggle
  autoFilterSwitch.addEventListener('change', function (e) {
    console.log('[Popup] Auto-filter toggled:', e.target.checked);
    chrome.runtime.sendMessage({
      type: 'TOGGLE_FILTER_ON_DETECTION',
      enabled: e.target.checked
    }, function () {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Auto-filter toggle error:', chrome.runtime.lastError.message);
      }
    });
  });

  // Keyboard layout dropdown handler
  keyboardLayoutSelect.addEventListener('click', function (e) {
    e.stopPropagation();
    keyboardLayoutItems.classList.toggle('hidden');
    // Hide the currently selected option
    var currentValue = keyboardLayoutSelect.textContent;
    keyboardLayoutItems.querySelectorAll('.select-item').forEach(function (item) {
      if (item.dataset.value === currentValue) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
        item.style.background = 'var(--bg-color)';
      }
    });
  });

  // Handle keyboard layout selection
  keyboardLayoutItems.querySelectorAll('.select-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      var value = item.dataset.value;
      keyboardLayoutSelect.textContent = value;
      keyboardLayoutItems.classList.add('hidden');
      // Reset display of all items
      keyboardLayoutItems.querySelectorAll('.select-item').forEach(function (i) {
        i.style.display = 'block';
      });
      chrome.runtime.sendMessage({
        type: 'POPUP_UPDATE_KEYBOARD_LAYOUT',
        layout: value
      });
    });
  });

  // ===== Support View Management =====
  // Handle support button click
  supportButton.addEventListener('click', function () {
    console.log('[Popup] Opening support view');
    mainView.classList.remove('active');
    donateView.classList.add('active');
  });

  // Handle back button click
  backButton.addEventListener('click', function () {
    console.log('[Popup] Closing support view');
    donateView.classList.remove('active');
    mainView.classList.add('active');
  });

  // Get initial filter type
  chrome.runtime.sendMessage({
    type: 'GET_FILTER_TYPE'
  }, function (response) {
    if (response !== null && response !== void 0 && response.filterType) {
      filterSelect.textContent = response.filterType;
      filterSelectItems.querySelectorAll('.select-item').forEach(function (item) {
        item.classList.toggle('selected', item.dataset.value === response.filterType);
      });
    }
  });

  // Add reset key handler
  resetKey.addEventListener('click', function () {
    resetKey.classList.add('listening');
    resetKey.textContent = 'key';
    var _keyHandler2 = function keyHandler(e) {
      e.preventDefault();
      if (e.key === 'Escape') {
        chrome.runtime.sendMessage({
          type: 'GET_RESET_KEY'
        }, function (response) {
          resetKey.textContent = response === null || response === void 0 ? void 0 : response.key;
        });
        resetKey.classList.remove('listening');
        document.removeEventListener('keydown', _keyHandler2);
        return;
      }
      var newKey = e.key.toLowerCase();
      resetKey.textContent = newKey;
      resetKey.classList.remove('listening');
      chrome.runtime.sendMessage({
        type: 'UPDATE_RESET_KEY',
        key: newKey
      }, function () {
        if (chrome.runtime.lastError) {
          console.log('[Popup] Error updating reset key:', chrome.runtime.lastError);
          chrome.runtime.sendMessage({
            type: 'GET_RESET_KEY'
          }, function (response) {
            resetKey.textContent = response === null || response === void 0 ? void 0 : response.key;
          });
        }
      });
      document.removeEventListener('keydown', _keyHandler2);
    };
    document.addEventListener('keydown', _keyHandler2);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=popup.js.map