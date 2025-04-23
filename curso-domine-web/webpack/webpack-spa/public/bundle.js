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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.css\";\n\n//# sourceURL=webpack://spa/./src/assets/css/style.css?");

/***/ }),

/***/ "./src/assets/imgs/logo.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74607ace448435964099.png\";\n\n//# sourceURL=webpack://spa/./src/assets/imgs/logo.png?");

/***/ }),

/***/ "./src/assets/js/navegacao.js?756e":
/*!************************************!*\
  !*** ./src/assets/js/navegacao.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76bccae8947726a9a935.js\";\n\n//# sourceURL=webpack://spa/./src/assets/js/navegacao.js?");

/***/ }),

/***/ "./src/assets/js/navegacao.js?f415":
/*!************************************!*\
  !*** ./src/assets/js/navegacao.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\r\n    function marcarLinkComoSelecionado(hash) {\r\n        const links = document.querySelectorAll(`[wm-link]`)\r\n        links.forEach(link => link.classList.remove('selecionado'))\r\n\r\n        const link = document.querySelector(`[wm-link='${hash}']`)\r\n        link.classList.add('selecionado')\r\n    }\r\n\r\n    function navegarViaAjax(hash) {\r\n        if (!hash) return\r\n\r\n        const link = document.querySelector(`[wm-link='${hash}']`)\r\n        const destino = document.querySelector('[wm-link-destino]')\r\n\r\n        const url = hash.substring(1)\r\n        fetch(url)\r\n            .then(resp => resp.text())\r\n            .then(html => {\r\n                destino.innerHTML = html\r\n                marcarLinkComoSelecionado(hash)\r\n            })\r\n    }\r\n\r\n    function configurarLinks() {\r\n        document.querySelectorAll('[wm-link]')\r\n            .forEach(link => {\r\n                link.href = link.attributes['wm-link'].value\r\n            })\r\n    }\r\n\r\n    function navegacaoInicial() {\r\n        if (location.hash) {\r\n            navegarViaAjax(location.hash)\r\n        } else {\r\n            const primeiroLink = document.querySelector('[wm-link]')\r\n            navegarViaAjax(primeiroLink.hash)\r\n        }\r\n    }\r\n\r\n    window.onhashchange = e => navegarViaAjax(location.hash)\r\n    \r\n    configurarLinks()\r\n    navegacaoInicial()\r\n})()\n\n//# sourceURL=webpack://spa/./src/assets/js/navegacao.js?");

/***/ }),

/***/ "./src/assets/sass/index.scss":
/*!************************************!*\
  !*** ./src/assets/sass/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://spa/./src/assets/sass/index.scss?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/imgs/logo.png */ \"./src/assets/imgs/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/navegacao.js */ \"./src/assets/js/navegacao.js?756e\"), __webpack_require__.b);\n// Module\nvar code = `<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Ajax</title>\r\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"${___HTML_LOADER_IMPORT_0___}\">\r\n</head>\r\n\r\n<body>\r\n    <aside class=\"logo\">\r\n        <a href=\"#/paginas/inicio.html\" class=\"logo\">\r\n            <img src=\"${___HTML_LOADER_IMPORT_1___}\" alt=\"logo\">\r\n        </a>\r\n    </aside>\r\n    <header class=\"cabecalho\">\r\n        <input type=\"text\" placeholder=\"Pesquisar...\">\r\n        <button class=\"btn bg-blue white\">Entrar</button>\r\n        <button class=\"btn bg-red white\">REGISTRAR</button>\r\n    </header>\r\n    <aside class=\"menu-area\">\r\n        <nav class=\"menu\">\r\n            <a wm-link=\"#/paginas/inicio.html\">\r\n                <i class=\"fa fa-home\"></i> Início\r\n            </a>\r\n            <a wm-link=\"#/paginas/cursos.html\">\r\n                <i class=\"fa fa-bars\"></i> Cursos\r\n            </a>\r\n            <a wm-link=\"#/paginas/suporte.html\">\r\n                <i class=\"fa fa-life-ring\"></i> Suporte\r\n            </a>\r\n            <a wm-link=\"#/paginas/sobre.html\">\r\n                <i class=\"fa fa-info-circle\"></i> Sobre\r\n            </a>\r\n        </nav>\r\n    </aside>\r\n    <main class=\"conteudo\" wm-link-destino></main>\r\n    <footer class=\"rodape\">\r\n        <span>\r\n            Desenvolvido com\r\n            <i class=\"fa fa-heart red\"></i>\r\n            por\r\n            <strong>Cod<span class=\"red\">3</span>r</strong>\r\n        </span>\r\n    </footer>\r\n    ${\"<\" + \"script\"} src=\"${___HTML_LOADER_IMPORT_2___}\">${\"<\" + \"/script\"}>\r\n</body>\r\n\r\n</html>\r\n`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://spa/./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/index.scss */ \"./src/assets/sass/index.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _assets_js_navegacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/navegacao.js */ \"./src/assets/js/navegacao.js?f415\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://spa/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;