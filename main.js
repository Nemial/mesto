(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.data,r=e.isMyCard,o=e.cardSelector,i=e.handleCardClick,a=e.likeCardHandler,u=e.handleDeleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._isMyCard=r,this._imageSrc=n.link,this._imageAlt=n.name,this._countLike=n.likes.length,this._cardId=n._id,this._name=n.name,this._cardSelector=o,this._handleCardClick=i,this._handleDeleteIconClick=u,this._likeCardHandler=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._likeCardHandler(t)})),this._isMyCard&&this._cardElement.querySelector(".place__trash-button").addEventListener("click",(function(t){e._handleDeleteIconClick(t)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"getCardId",value:function(){return this._cardId}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._likeButton=this._cardElement.querySelector(".place__like-button"),this._isMyCard||this._cardElement.querySelector(".place__trash-button").remove(),this._cardImage=this._cardElement.querySelector(".place__image"),this._cardImage.alt=this._imageAlt,this._cardImage.src=this._imageSrc,this._countLikeElement=this._cardElement.querySelector(".place__count-like"),this._cardElement.querySelector(".place__name").textContent=this._name,this._countLikeElement.textContent=this._countLike,this._setEventListeners(),this._cardElement}},{key:"setLikeCount",value:function(e){this._countLikeElement.textContent=e,this._likeButton.classList.toggle("place__like-button_active")}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("place__like-button_active")}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&o(t.prototype,n),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},s(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(){var e;u(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(p(e=i.call.apply(i,[this].concat(n))),"_popupImage",e._popup.querySelector(".popup-viewer__image")),d(p(e),"_popupText",e._popup.querySelector(".popup-viewer__text")),e}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupText.textContent=t,s(h(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),a}(i),v={inputSelector:"popup__form-input",disableButtonClass:"popup__button-submit_disabled",buttonSubmitClass:"popup__button-submit",activeErrorClass:"input-error_visible",inputErrorClass:"popup__form-input_error"},_="#template-place",m=document.querySelector(".profile"),b=m.querySelector(".profile__edit-button"),g=m.querySelector(".profile__add-button");function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E(this,a),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._formElementSubmitButton=n._formElement.querySelector(".popup__button-submit"),n._inputList=n._formElement.querySelectorAll(".popup__form-input"),n._submitButtonDefaultValue=n._formElementSubmitButton.textContent,n._handlerSubmitForm=t,n._isAvatarPopup=r,n}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"getFormValues",value:function(){return this._getInputValues()}},{key:"getFormElement",value:function(){return this._formElement}},{key:"close",value:function(){this._formElement.reset(),S(O(a.prototype),"close",this).call(this)}},{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),this._isAvatarPopup&&document.querySelector(".profile__image-container").addEventListener("click",(function(){e.open()})),S(O(a.prototype),"setEventListener",this).call(this)}},{key:"changeLoader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._formElementSubmitButton.textContent=e?"Сохранение...":this._submitButtonDefaultValue}}],n&&w(t.prototype,n),a}(i);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userDescriptionElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userDescription:this._userDescriptionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userDescription;this._userNameElement.textContent=t,this._userDescriptionElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.userAvatarLink;this._userAvatarElement.src=t}},{key:"saveUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}])&&j(t.prototype,n),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._classData=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._classData.inputSelector))),this._buttonElement=this._formElement.querySelector(".".concat(this._classData.buttonSubmitClass))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._classData.disableButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._classData.disableButtonClass),this._buttonElement.disabled=!1)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._classData.activeErrorClass),e.classList.add(this._classData.inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._classData.activeErrorClass),t.textContent="",e.classList.remove(this._classData.inputErrorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&D(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.headers,r=t.baseUrl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=n,this._baseUrl=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getPageNeedData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"addLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{headers:this._headers,method:"PUT"}).then(this._checkResponse)}},{key:"removeLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"changeProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}}])&&T(t.prototype,n),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},x(e,t,n||e)}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function N(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),x(V(a.prototype),"setEventListener",this).call(this)}},{key:"changeHandlerSubmitForm",value:function(e){this._handlerSubmitForm=e}}])&&A(t.prototype,n),a}(i);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"ae466f98-7ffc-4435-a80d-300e1427093a","Content-Type":"application/json"}}),J=new r({renderer:function(e){var t=Y(e,_);J.addItem(t)}},".places"),z=new I(".popup-change-avatar",(function(e){e.preventDefault(),z.changeLoader(!0);var t=z.getFormValues();M.changeProfileAvatar({avatar:t.url}).then((function(){z.close()})).catch((function(e){console.error(e)})).finally((function(){z.changeLoader()}))}),!0);z.setEventListener(),new R(v,z.getFormElement()).enableValidation();var $=new P({userNameSelector:".profile__title",userDescriptionSelector:".profile__subtitle",userAvatarSelector:".profile__avatar"});M.getPageNeedData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo({userName:i.name,userDescription:i.about}),$.setUserAvatar({userAvatarLink:i.avatar}),$.saveUserId(i._id),J.renderItems(o)})).catch((function(e){console.error(e)}));var G=new I(".popup-new-place",(function(e){e.preventDefault(),G.changeLoader(!0);var t=G.getFormValues(),n={name:t.name,link:t.url};M.addNewCard(n).then((function(e){var t=Y(e,_);J.addNewItem(t),G.close()})).catch((function(e){console.error(e)})).finally((function(){G.changeLoader()}))}));G.setEventListener();var K=new R(v,G.getFormElement());K.enableValidation();var Q=new I(".profile-popup",(function(e){e.preventDefault(),Q.changeLoader(!0);var t=Q.getFormValues();M.updateUserInfo({name:t.title,about:t.subtitle}).then((function(e){$.setUserInfo({userName:e.name,userDescription:e.about}),Q.close()})).catch((function(e){console.error(e)})).finally((function(){Q.changeLoader()}))}));Q.setEventListener();var W=new R(v,Q.getFormElement());W.enableValidation();var X=new F(".popup-confirm");function Y(e,n){var r=$.getUserId()===e.owner._id,o=new t({data:e,isMyCard:r,cardSelector:n,handleCardClick:function(){var t=new y(".popup-viewer");t.setEventListener(),t.open(e.link,e.name)},likeCardHandler:function(){o.isLiked()?M.removeLike(o.getCardId()).then((function(e){o.setLikeCount(e.likes.length)})).catch((function(e){console.error(e)})):M.addLike(o.getCardId()).then((function(e){o.setLikeCount(e.likes.length)})).catch((function(e){console.error(e)}))},handleDeleteIconClick:function(e){var t=e.target.closest(".place"),n=o.getCardId();X.changeHandlerSubmitForm((function(e){e.preventDefault(),M.removeCard(n).then((function(){t.remove(),X.close()})).catch((function(e){console.error(e)}))})),X.open()}});return o.generateCard()}X.setEventListener(),b.addEventListener("click",(function(){var e=$.getUserInfo(),t=Q.getFormElement();t.elements.name.value=e.userName,t.elements.description.value=e.userDescription,W.resetValidation(),Q.open()})),g.addEventListener("click",(function(){K.resetValidation(),G.open()}))})();