(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7:function(t,n,e){"use strict";e.r(n);var r=e(9),o=e.p+"78e4eefdd8fda211f06fa774b0a860ee.svg",i={init:function(t,n){this._buttonDrawer(t,n),this._forceCloseDrawer(t)},_buttonDrawer:function(t,n){var e=this;Object(r.a)(n).onClick((function(){Object(r.a)(t).containClass(["active"])?(e._closeDrawer(t),e._changeIconLabelButtonDrawer({button:n,label:"menu open",icon:'<i class="bi bi-list"></i>'})):(e._openDrawer(t),e._changeIconLabelButtonDrawer({button:n,label:"menu close",icon:'<i class="bi bi-x"></i>'}))}))},_changeIconLabelButtonDrawer:function(t){var n=t.button,e=t.label,r=t.icon;n.innerHTML=r,n.setAttribute("aria-label",e)},_openDrawer:function(t){Object(r.a)(t).removeClass(["hide-animation"]).addClass(["active","show-animation"]).animation().end((function(){Object(r.a)(t).addClass(["active"]).removeClass(["show-animation"])}))},_closeDrawer:function(t){Object(r.a)(t).removeClass(["show-animation"]).addClass(["hide-animation"]).animation().end((function(){Object(r.a)(t).removeClass(["active","hide-animation"])}))},_forceCloseDrawer:function(t){Object(r.a)(window).onResize((function(){var n=Object(r.a)(window).media("phone"),e=Object(r.a)(t).containClass(["active"]);!n.matches&&e&&Object(r.a)(t).removeClass(["active","show-animation"])}))}};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,n){if(n&&("object"===c(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){var n="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return f(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}function f(t,n,e){return(f=b()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&p(o,e.prototype),o}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(h,t);var n,e,c,l,f,m=(n=h,e=b(),function(){var t,r=y(n);if(e){var o=y(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function h(){return u(this,h),m.apply(this,arguments)}return c=h,(l=[{key:"connectedCallback",value:function(){this._render()}},{key:"_render",value:function(){this._template(),this._changeColor(),i.init(Object(r.a)("#menuContainer"),Object(r.a)("#menuButton"))}},{key:"_template",value:function(){this.innerHTML='\n      <nav>\n        <a class="navbar-brand" href="index.html">\n          <img src="'.concat(o,'" alt="Ristorante">\n        </a>\n        <button id="menuButton" aria-label="menu open" type="button">\n          <i class="bi bi-list"></i>\n        </button>\n        <ul id="menuContainer">\n          <li>\n            <a href="index.html" class="active">\n              Home\n            </a>\n          </li>\n          <li>\n            <a href="#">Favorite</a>\n          </li>\n          <li>\n            <a href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/">\n              About Us\n            </a>\n          </li>\n        </ul>\n      </nav>\n    ')}},{key:"_changeColor",value:function(){Object(r.a)(window).onScroll((function(){var t=Object(r.a)("#appBar"),n=t.offsetHeight;document.body.scrollTop>n||document.documentElement.scrollTop>n?Object(r.a)(t).css({backgroundColor:"#222"}):Object(r.a)(t).css({backgroundColor:""})}))}}])&&a(c.prototype,l),f&&a(c,f),h}(l(HTMLElement));customElements.define("app-bar",m)},9:function(t,n,e){"use strict";function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,"a",(function(){return y}));var s={isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:function(t){return"object"===a(t)}},l=s.isObject;function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){p(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function y(t){var n={element:t};return l(t)?b(b(b(b({},function(t){var n=t.element,e=function(t,e,r){n.addEventListener(t,e,r)};return o(o({},function(t){var n=t.element,e=function(t,e,r){n.addEventListener(t,e,r)};return{hover:function(){return{on:function(t,n){return e("mouseover",t,n),this},off:function(t,n){return e("mouseout",t,n),this}}},focus:function(){return{on:function(t,n){return e("focus",t,n),this},off:function(t,n){return e("blur",t,n),this}}},animation:function(){return{start:function(t,n){return e("animationstart",t,n),this},end:function(t,n){return e("animationend",t,n),this}}}}}({element:n})),{},{onBlur:function(t,n){return e("blur",t,n),this},onChange:function(t,n){return e("change",t,n),this},onClick:function(t,n){return e("click",t,n),this},onFocus:function(t,n){return e("focus",t,n),this},onHashChange:function(t,n){e("hashchange",t,n)},onKeyUp:function(t,n){return e("keyup",t,n),this},onMouseOver:function(t,n){return e("mouseover",t,n),this},onMouseOut:function(t,n){return e("mouseout",t,n),this},onResize:function(t,n){return e("resize",t,n),this},onScroll:function(t,n){return e("scroll",t,n),this},onSubmit:function(t,n){return e("submit",t,n),this}})}(n)),function(t){var n=t.element;return{addClass:function(t){var e;return(e=n.classList).add.apply(e,c(t)),this},removeClass:function(t){var e;return(e=n.classList).remove.apply(e,c(t)),this},toggleClass:function(t){var e;return(e=n.classList).toggle.apply(e,c(t)),this},containClass:function(t){var e;return(e=n.classList).contains.apply(e,c(t))}}}(n)),function(t){var n=t.element;return{show:function(){return n.style.display="",this},hide:function(){return n.style.display="none",this},css:function(t){for(var e,r=Object.keys(t),o=Object.values(t),i=Object.entries(t),c="",u=0;u<i.length;u++)c+="\n          ".concat((e=r[u],e.split("").map((function(t){return t.toUpperCase()===t?"-".concat(t.toLowerCase()):t})).join("")),": ").concat(o[u],"; \n        ");return n.style=c,this}}}(n)),function(t){var n=t.element;return{media:function(t){switch(t){case"phone":t="max-width: 767px";break;case"tablet":t="max-width: 1023px";break;case"desktop":t="min-width: 1023px"}return n.matchMedia("(".concat(t,")"))}}}(n)):t.includes("#")?document.querySelector(t):document.querySelectorAll(t)}}}]);