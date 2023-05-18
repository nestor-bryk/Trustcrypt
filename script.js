/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burgerMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/burgerMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burgerMenu = (btnSelector, contentSelector, itemSelector, socialSelector) => {
  const btn = document.querySelector(btnSelector),
    menu = document.querySelector(contentSelector),
    menuLinks = document.querySelectorAll(itemSelector),
    menuSocialItem = document.querySelectorAll(socialSelector);
  btn.addEventListener('click', () => {
    toggleMenu();
  });
  menuLinks.forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu();
    });
  });
  menuSocialItem.forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu();
    });
  });
  function toggleMenu() {
    if (menu.style.display == 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

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

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = _ref => {
  let {
    container,
    slide,
    wrapper,
    field
  } = _ref;
  const slider = document.querySelector(container),
    slides = document.querySelectorAll(slide),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;
  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(item => {
    item.style.width = width;
  });
  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }
  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ "./src/js/modules/burgerMenu.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"])('.header__dropdown-btn', '.header__dropdown-items', '.current__lenguage-icon', '.current__lenguage-text', '.header__dropdown-item');
  (0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"])('.burger__menu-btn', '.burger__menu-wrapper', '.burger__menu-item', '.menu__social-item');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    container: '.slider',
    slide: '.slide',
    wrapper: '.slider-wrapper',
    field: '.slider-inner'
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map