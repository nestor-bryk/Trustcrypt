/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dropdown = (btnSelector, dropdownSelector, currentIconSelector, currentTextSelector, dropdownItemSelector) => {
  const dropdownBtn = document.querySelector(btnSelector),
    dropdownMenu = document.querySelector(dropdownSelector),
    currentIcon = document.querySelector(currentIconSelector),
    currentText = document.querySelector(currentTextSelector),
    dropdownElements = document.querySelectorAll(dropdownItemSelector);
  const links = {
    arrowUp: './assets/icons/dropdown/arrow-up.svg',
    arrowDown: './assets/icons/dropdown/arrow-down.svg'
  };
  function openMenu() {
    dropdownBtn.addEventListener('click', e => {
      if (e.target && e.target.tagName == 'IMG' && e.target.classList.contains('arrow-down')) {
        checkingValues(links.arrowUp, 'arrow-up', 'block');
      } else {
        checkingValues(links.arrowDown, 'arrow-down', 'none');
      }
    });
  }
  function chooseElement() {
    dropdownElements.forEach(elem => {
      elem.addEventListener('click', e => {
        currentIcon.setAttribute('src', elem.firstChild.getAttribute('src'));
        currentText.textContent = elem.lastChild.textContent;
        checkingValues(links.arrowDown, 'arrow-down', 'none');
      });
    });
  }
  function checkingValues(link, seletor, display) {
    dropdownBtn.innerHTML = `
            <img class="${seletor}" src="${link}" alt="${seletor}">
        `;
    dropdownMenu.style.display = display;
  }
  openMenu();
  chooseElement();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdown);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdown */ "./src/js/modules/dropdown.js");

document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"])('.header__dropdown-btn', '.header__dropdown-items', '.current__lenguage-icon', '.current__lenguage-text', '.header__dropdown-item');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map