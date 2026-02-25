/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/main.jpg */ \"./src/images/main.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/contact.jpg */ \"./src/images/contact.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\n:root {\n  margin: 0;\n  gap: 0;\n  box-sizing: border-box;\n  --color: rgb(215, 215, 215);\n  --backColor: rgb(36, 36, 36);\n  --colorButtons: rgb(255, 133, 72);\n  --colorButtonsHover: rgb(255, 105, 30);\n}\nbody {\n  color: var(--color);\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n#content {\n  min-width: 700px;\n}\nheader {\n  background-color: var(--backColor);\n  min-width: 700px;\n  display: flex;\n  justify-content: right;\n  \n}\nnav>ul {\n  display: flex;\n  gap: 3rem;\n  margin-right: 100px;\n  list-style-type: none;\n}\nnav>ul>li>button {\n  width: 120px;\n  height: 30px;\n  border: none;\n  background-color: var(--backColor);\n  color: var(--color);\n  font-size: 18px;\n}\n.hero {\n  height: 70vh;  \n  width: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;    \n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  position: relative;         \n  color: white;     \n  display: flex;\n  justify-content: center;               \n}\n.heroContacts {\n  height: 80vh;  \n  width: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;    \n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  position: relative;         \n  color: white;     \n  display: flex;\n  justify-content: center;               \n}\n.main_info {\n  width: 500px;\n  height: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.welcome, .name {\n  font-size: 80px;\n  font-weight: 900;\n  text-shadow: 1px 1px 2px white;\n  margin: 0;\n}\n.label {\n  font-size: 20px;\n  font-style: italic;\n}\n.footer {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  background-color: var(--backColor);\n  display: flex;\n  flex-direction: column;\n}\n.card_container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 70vw;\n  align-self: center;\n \n\n  gap: 2rem;\n}\n.footer_title {\n  text-align: center;\n  font-size: 20px;\n  padding: 20px;\n}\n\n.button {\n  border-radius: 12px/15px;\n  border: none;\n  width: 130px;\n  height: 35px;\n  background-color: var(--colorButtons);\n}\n\n.button:hover {\n  background-color: var(--colorButtonsHover);\n}\n.buttons {\n  display: flex;\n  gap: 40px;\n}\n.card {\n  border-radius: 15px;\n  padding: 10px;\n  background-color: rgb(74, 74, 74);\n}\n.card_head {\n  font-weight: 700;\n  font-size: 18px;\n  background-color: rgb(34, 34, 34);\n  border-radius: 12px/15px;\n  text-align: center;\n  min-width: 180px;\n}\n.card_body {\n  padding: 0 10px 0 20px;\n}\n\n\n.container_menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--backColor);\n}\n.menu_frame {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(74, 74, 74);\n  border-radius: 15px/12px;\n  margin: 30px;\n  width: 800px;\n}\n.title_menu {\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n}\n.block_container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.block, h1 {\n padding: 10px;\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n}\n.contacts {\n  font-size: 80px;\n  font-weight: 900;\n  color: var(--colorButtonsHover);\n  text-shadow: 1px 1px 2px white;\n  margin-bottom: 30px;\n}\n.contInfo {\n  margin: 0;\n  font-size: 22px;\n  padding: 5px;\n  color: var(--color);\n}\n.main_info > p:last-child {\n  border-bottom: 1px solid var(--colorButtonsHover);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/contact.jpg"
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"98b1c3b6af704b8a611d.jpg\";\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/images/contact.jpg?\n}");

/***/ },

/***/ "./src/images/main.jpg"
/*!*****************************!*\
  !*** ./src/images/main.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"48eba47ed80aa31cea7f.jpg\";\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/images/main.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contacts: () => (/* binding */ contacts)\n/* harmony export */ });\nfunction contacts() {\n    console.log (\"it's about!\");\n    const hero = document.createElement(\"div\");\n    const main_info = document.createElement(\"div\");\n    const footer = document.createElement(\"div\");\n    const contacts = document.createElement(\"p\");\n    const line1 = document.createElement(\"p\");\n    const line2 = document.createElement(\"p\");\n    const line3 = document.createElement(\"p\");\n    const line4 = document.createElement(\"p\");\n\n    const container = document.querySelector(\"#content\");\n\n    hero.classList.add(\"heroContacts\");\n    main_info.classList.add(\"main_info\");\n    footer.classList.add(\"footer\");\n    contacts.classList.add(\"contacts\"); \n    line1.classList.add (\"contInfo\");\n    line2.classList.add (\"contInfo\");\n    line3.classList.add (\"contInfo\");\n    line4.classList.add (\"contInfo\");\n  \n\n    contacts.textContent = (\"Contacts\");\n    line1.textContent = (\"Phone: +39 06 12345678\");\n    line2.textContent = (\"Email: info@cozybistro.com\");\n    line3.textContent = (\"123 Elegant street, Rome, Italy\");\n    line4.textContent = (\"Cozy Bistro - Rome\");\n    \n\n\n    container.appendChild(hero);\n    hero.appendChild(main_info);\n    main_info.appendChild(contacts);\n    main_info.appendChild(line1);\n    main_info.appendChild(line2);\n    main_info.appendChild(line3);\n    main_info.appendChild(line4);\n    container.appendChild(footer);\n\n\n}\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/about.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage.js */ \"./src/webpage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n// src/index.js\n\n\n\n\n\n(0,_webpage_js__WEBPACK_IMPORTED_MODULE_1__.main)();\n\nconst navHome = document.getElementById(\"navHome\");\nconst navMenu = document.getElementById(\"navMenu\");\nconst navAbout = document.getElementById(\"navAbout\");\n\nconst content = document.getElementById(\"content\");\n\n\nnavHome.addEventListener (\"click\", () => {\n    content.replaceChildren();\n    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_1__.main)();\n})\nnavMenu.addEventListener (\"click\", () => {\n    content.replaceChildren();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n})\nnavAbout.addEventListener (\"click\", () => {\n    content.replaceChildren();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.contacts)();\n})\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n\nconst menu_starters = [\n    {\n      name: \"Bruschetta al Pomodoro\",\n      price: 250,\n      description: \"Tomato, basil, garlic on toasted bread\",\n      category: \"Starters\"\n    },\n    {\n      name: \"Creamy Mushroom Soup\",\n      price: 150,\n      description: \"Rich blend with cream and wild mushrooms\",\n      category: \"Starters\"\n    },\n    {\n      name: \"Grilled Caesar Salad\",\n      price: 160,\n      description: \"Romaine, parmesan, croutons, caesar dressing\",\n      category: \"Starters\"\n    }\n]\nconst menu_main_courses = [\n    {\n      name: \"Garlic Bread\",\n      price: 250,\n      description: \"Toasted with garlic butter and herbs\",\n      category: \"Main Courses\"\n    },\n    {\n      name: \"Pan-Seared Salmon\",\n      price: 190,\n      description: \"Served with lemon herb sauce\",\n      category: \"Main Courses\"\n    },\n]\nconst menu_pasta = [\n    {\n      name: \"Truffle Risotto\",\n      price: 160,\n      description: \"Creamy arborio rice with black truffle & parmesan\",\n      category: \"Pasta & Risotto\"\n    },\n    {\n      name: \"Margherita Pizza\",\n      price: 150,\n      description: \"Classic tomato, mozzarella, basil (listed here as pasta/risotto crossover in image)\",\n      category: \"Pasta & Risotto\"\n    },\n]\nconst menu_salads = [\n    {\n      name: \"Grilled Caesar Salad\",\n      price: 160,\n      description: \"Romaine hearts, grilled, caesar dressing\",\n      category: \"Salads\"\n    },\n    {\n      name: \"Grilled Salad\",\n      price: 100,\n      description: \"Mixed greens, grilled vegetables\",\n      category: \"Salads\"\n    },\n]\n\nconst menu_desserts = [\n    {\n      name: \"Tiramisu\",\n      price: 160,\n      category: \"Desserts\"\n    }\n]\n\nfunction menu() {\n    const container = document.querySelector(\"#content\");\n    const menu_frame = document.createElement(\"div\");\n    const title_container = document.createElement(\"div\");\n    const title = document.createElement(\"p\");\n    const block_container = document.createElement(\"div\");\n\n\n    title.textContent = (\"Menu\");\n    menu_frame.classList.add(\"menu_frame\");\n    title_container.classList.add (\"title_menu\");\n    block_container.classList.add (\"block_container\");\n    container.classList.add(\"container_menu\");\n\n\n    function createItem (item,block) {\n        const item_div = document.createElement(\"div\");\n        const item_name = document.createElement(\"h3\");\n        const item_price = document.createElement(\"p\");\n        const item_description = document.createElement(\"p\");\n\n        item_div.classList.add (\"block\");\n\n        item_name.textContent = `${item.name}`;\n        item_price.textContent = `$ ${item.price}`;\n        item_description.textContent = `${item.description}`;\n\n        item_description.style.fontStyle = \"italic\";\n\n        item_div.append(item_name);\n        item_div.append(item_description);\n        item_div.append(item_price);\n       \n\n        block.append(item_div);\n        };\n\n\n    const menuTitle1 = document.createElement(\"h1\");\n    const menuTitle2 = document.createElement(\"h1\");\n    const menuTitle3 = document.createElement(\"h1\");\n    const menuTitle4 = document.createElement(\"h1\");\n    const menuTitle5 = document.createElement(\"h1\");\n    menuTitle1.textContent = (menu_starters[0].category);\n    menuTitle2.textContent = (menu_main_courses[0].category);\n    menuTitle3.textContent = (menu_pasta[0].category);\n    menuTitle4.textContent = (menu_salads[0].category);\n    menuTitle5.textContent = (menu_desserts[0].category);\n    \n\n    function addItems(){\n        const block1 = document.createElement(\"div\");\n        block1.appendChild(menuTitle1);  \n        menu_starters.forEach (item => createItem(item,block1));\n        block_container.appendChild(block1);\n\n        const block2 = document.createElement(\"div\");\n        block2.appendChild(menuTitle2);  \n        menu_main_courses.forEach (item => createItem(item,block2));\n        block_container.appendChild(block2);\n\n        const block3 = document.createElement(\"div\");\n        block3.appendChild(menuTitle3);  \n        menu_pasta.forEach (item => createItem(item,block3));\n        block_container.appendChild(block3);\n\n        const block4 = document.createElement(\"div\");\n        block4.appendChild(menuTitle4);  \n        menu_salads.forEach (item => createItem(item,block4));\n        block_container.appendChild(block4);\n\n        const block5 = document.createElement(\"div\");\n        block5.appendChild(menuTitle5);  \n        menu_desserts.forEach (item => createItem(item,block5));\n        block_container.appendChild(block5);\n    }       \n    addItems();\n\n    menu_frame.appendChild(title_container);\n    title_container.appendChild(title);\n    menu_frame.appendChild(block_container);\n    container.appendChild(menu_frame);\n}   \n\n//# sourceURL=webpack://restaurant-page-webpack/./src/menu.js?\n}");

/***/ },

/***/ "./src/webpage.js"
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n\nfunction main() {\n    console.log(\"It's working\")\n    const hero = document.createElement(\"div\");\n    const main_info = document.createElement(\"div\");\n    const footer = document.createElement(\"div\");\n    const card_container = document.createElement(\"div\");\n    const buttons = document.createElement(\"div\");\n    const welcome = document.createElement(\"p\");\n    const name = document.createElement(\"p\");\n    const label = document.createElement(\"p\");\n    const menuBtn = document.createElement(\"button\");\n    const reservBtn = document.createElement(\"button\");\n    const footer_title = document.createElement(\"p\");\n    const card1 = document.createElement(\"div\");\n    const card2 = document.createElement(\"div\");\n    const card3 = document.createElement(\"div\");\n    const card1_head = document.createElement(\"p\");\n    const card1_body = document.createElement(\"p\");\n    const card2_head = document.createElement(\"p\");\n    const card2_body = document.createElement(\"p\");\n    const card3_head = document.createElement(\"p\");\n    const card3_body = document.createElement(\"p\");\n\n    const container = document.querySelector(\"#content\");\n\n    hero.classList.add(\"hero\");\n    hero.id = (\"hp1\");\n    main_info.classList.add(\"main_info\");\n    footer.classList.add(\"footer\");\n    footer.id = (\"hp2\");\n    card_container.classList.add(\"card_container\");\n    welcome.classList.add(\"welcome\") ;\n    name.classList.add(\"name\") ;\n    label.classList.add(\"label\") ;\n    menuBtn.classList.add(\"button\") ;\n    reservBtn.classList.add(\"button\") ;\n    buttons.classList.add(\"buttons\") ;\n    menuBtn.id = (\"menuBtn\") ;\n    reservBtn.id = (\"reservBtn\") ;\n    footer_title.classList.add(\"footer_title\");\n    card1.classList.add(\"card\") ;\n    card2.classList.add(\"card\") ;\n    card3.classList.add(\"card\") ;\n    card1_head.classList.add(\"card_head\");\n    card2_head.classList.add(\"card_head\");\n    card3_head.classList.add(\"card_head\");\n    card1_body.classList.add(\"card_body\");\n    card2_body.classList.add(\"card_body\");\n    card3_body.classList.add(\"card_body\");\n\n    welcome.textContent = (\"Welcome to\");\n    name.textContent = (\"Cozy Bistro\");\n    label.textContent = (\"Authentic Italian in the Heart of Rome\");\n    menuBtn.textContent = (\"View Menu\");\n    reservBtn.textContent = (\"Reserve a Table\");\n    footer_title.textContent = (\"Our Signature Dishes\");\n    card1_head.textContent = (\"Truffle Risotto\");\n    card2_head.textContent = (\"Grilled Octopus\");\n    card3_head.textContent = (\"Signature Tiramisu\");\n    card1_body.textContent = (\"Creamy arborio rice infused with black truffle and parmesan\");\n    card2_body.textContent = (\"Tender octopus with olive oil, lemon, garlic and fresh herbs\");\n    card3_body.textContent = (\"Layers of coffee-soaked ladyfingers, mascarpone cream and cocoa\");\n\n\n\n\n    container.appendChild(hero);\n    hero.appendChild(main_info);\n    main_info.appendChild(welcome);\n    main_info.appendChild(name);\n    main_info.appendChild(label);\n    main_info.appendChild(buttons);\n    buttons.appendChild(menuBtn);\n    buttons.appendChild(reservBtn);\n    container.appendChild(footer);\n    footer.appendChild(footer_title);\n    footer.appendChild(card_container);\n    card_container.appendChild(card1);\n    card_container.appendChild(card2);\n    card_container.appendChild(card3);\n    card1.appendChild(card1_head);\n    card1.appendChild(card1_body);\n    card2.appendChild(card2_head);\n    card2.appendChild(card2_body);\n    card3.appendChild(card3_head);\n    card3.appendChild(card3_body);\n\n}\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/webpage.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;