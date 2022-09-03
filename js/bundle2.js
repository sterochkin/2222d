/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/char.js":
/*!****************************!*\
  !*** ./js/modules/char.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function char(){

var gustoname = document.querySelector('.gustoname');
var gustoprice = document.querySelector('.gustoprice');
var div = document.createElement('div');
var li = document.createElement('li');
var cheifdop_name = document.querySelector('.cheifdop_name');
var cheifdop_price = document.querySelector('.cheifdop_price');
var cheifname = document.querySelector('.cheifname');
var cheifprice = document.querySelector('.cheifprice');
const preview = document.querySelectorAll(".preview_small-img")
const circle = document.querySelectorAll(".preview__color-border")
let buttons = document.querySelectorAll(".tabheader_char-item")
const buttoncheif = document.querySelectorAll(".cheifsize__button-style")
const buttongusto = document.querySelectorAll(".gustosize__button-style")
const cheif = ['68кг','600x400(мм)', '150x415(мм)', '20 мин', '2 кг/ч']
const gusto = ["92кг", "700x500(мм)", "180x480(мм)", "20 мин", "2,5 кг/ч"]

buttoncheif.forEach(cheif => {
  cheif.addEventListener('click', () => {
    buttoncheif.forEach((cheif) => cheif.classList.remove('cheifsize__button-style-active'));
    cheif.classList.add('cheifsize__button-style-active');
    if(cheif.classList.contains("litecheif")){
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFLITE.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFLITE2.png'
    } else if(cheif.classList.contains("averagecheif")){
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFAVERAGE.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFAVERAGE2.png'
    }else {
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFPRO.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFPRO2.png'
    }
  });
})

// buttoncheif.forEach(cheifdop => {
//   cheifdop.addEventListener('click', () => {
//     if(cheifdop.classList.contains('litecheif')){
//       li.innerHTML = 'Стойка ALHA LITE для CHIEF';
//       cheifdop_name.append(li);
//       div.innerHTML = '610 руб.';
//       cheifdop_price.append(div);
//     }else if(cheifdop.classList.contains('averagecheif')){
//       li.innerHTML = 'Стойка ALHA AVERAGE для CHIEF';
//       cheifdop_name.append(li);
//       div.innerHTML = '820 руб.';
//       cheifdop_price.append(div);
//     }else if(cheifdop.classList.contains('procheif')){
//       li.innerHTML = 'Стойка ALHA PRO для CHIEF';
//       cheifdop_name.append(li);
//       div.innerHTML = '310 руб.';
//       cheifdop_price.append(div);
//     }
//   })
// })

buttongusto.forEach(gusto => {
  gusto.addEventListener('click', () => {
    buttongusto.forEach((gusto) => gusto.classList.remove('gustosize__button-style-active'));
    gusto.classList.add('gustosize__button-style-active');

    if(gusto.classList.contains("litegusto")){
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOLITE.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOLITE2.png'
    } else if(gusto.classList.contains("averagegusto")){
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOAVERAGE.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOAVERAGE2.png'
    }else {
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOPRO.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOPRO2.png'
    }
  });
})
// buttons.forEach(price => {
//   price.addEventListener('click', () => {
// if(price.classList.contains('cheif')){
//   li.innerHTML = 'Печь ALHA CHIEF';
//   cheifname.appendChild(li);
//   div.innerHTML = '1390 руб.';
//   cheifprice.appendChild(div);
// } else if(price.classList.contains('gusto')){
//   li.innerHTML = 'Печь ALHA GUSTO';
//   cheifname.appendChild(li);
//   div.innerHTML = '1810 руб.';
//   cheifprice.appendChild(div);
// }
// })
// })
// buttons.forEach(none => {
//   none.addEventListener('click', () => {
// if(none.classList.contains('cheif')){
//   document.querySelector(".gustosize__setting").classList.add("gustosize_display-none");
//   document.querySelector(".cheifsize__setting").classList.remove("cheifsize_display-none");
// }else if(none.classList.contains('gusto')){
//   document.querySelector(".cheifsize__setting").classList.add("cheifsize_display-none");
//   document.querySelector(".gustosize__setting").classList.remove("gustosize_display-none");
// }else {
//   document.querySelector(".cheifsize__setting").classList.remove("cheifsize_display-none");
//   document.querySelector(".gustosize__setting").classList.remove("gustosize_display-none");
// }
// })
// })
circle.forEach(color => {
  color.addEventListener('click', () => {
    circle.forEach((color) => color.classList.remove('preview__color-border-active'));
    color.classList.add('preview__color-border-active');
    if(document.querySelector(".tabheader_char-item-active").classList.contains('cheif'))
    {
      if(document.querySelector(".preview_small-img-active").classList.contains('foto1')){

      if(color.classList.contains('red')){
      document.querySelector(".preview_img").src = '/img/cheif/cheifred.png'
    } else if(color.classList.contains('green')){
      document.querySelector(".preview_img").src = '/img/cheif/cheifgreen.png'
    } else{
      document.querySelector(".preview_img").src = '/img/cheif/1.png'
    }
  } 
    else if (document.querySelector(".preview_small-img-active").classList.contains('foto2')){
    if(color.classList.contains('red')){
      document.querySelector(".preview_img").src = '/img/cheif/cheifred2.png'
    } else if(color.classList.contains('green')){
      document.querySelector(".preview_img").src = '/img/cheif/cheifgreen2.png'
    } else{
      document.querySelector(".preview_img").src = '/img/cheif/2.png'
    }  
  }
    else if(document.querySelector(".preview_small-img-active").classList.contains('foto3')){
    if(color.classList.contains('red')){
        document.querySelector(".preview_img").src = '/img/cheif/cheifred3.png'
      } else if(color.classList.contains('green')){
        document.querySelector(".preview_img").src = '/img/cheif/cheifgreen3.png'
      } else{
        document.querySelector(".preview_img").src = '/img/cheif/3.png'
      }  
    }
  } 
    else if(document.querySelector(".tabheader_char-item-active").classList.contains('gusto'))
    {
      if(document.querySelector(".preview_small-img-active").classList.contains('foto1')){

      if(color.classList.contains('red')){
      document.querySelector(".preview_img").src = '/img/gusto/gustored.png'
    } else if(color.classList.contains('green')){
      document.querySelector(".preview_img").src = '/img/gusto/gustogreen.png'
    } else{
      document.querySelector(".preview_img").src = '/img/gusto/1.png'
    }
  } 
    else if (document.querySelector(".preview_small-img-active").classList.contains('foto2')){
    if(color.classList.contains('red')){
        document.querySelector(".preview_img").src = '/img/gusto/gustored2.png'
      } else if(color.classList.contains('green')){
        document.querySelector(".preview_img").src = '/img/gusto/gustogreen2.png'
      } else{
        document.querySelector(".preview_img").src = '/img/gusto/2.png'
      }  
    }
  else {
    (document.querySelector(".preview_small-img-active").classList.contains('foto3'))
    if(color.classList.contains('red')){
        document.querySelector(".preview_img").src = '/img/cheif/gustored3.png'

      } else if(color.classList.contains('green')){
        document.querySelector(".preview_img").src = '/img/gusto/gustogreen3.png'
      } else{
        document.querySelector(".preview_img").src = '/img/gusto/3.png'
      }  
    }
  } 
  });
})

for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('tabheader_char-item-active')
     );
     if(this.classList.contains("gusto"))
     { 

      document.querySelectorAll('.info').forEach((n, i) => n.textContent = gusto[i])
      document.querySelector(".preview_img").src = '/img/gusto/1.png';
      document.querySelector(".fotosmall1").src = '/img/gusto/small1.png'
      document.querySelector(".fotosmall2").src = '/img/gusto/small2.png'
      document.querySelector(".fotosmall3").src = '/img/gusto/small3.png'
     }
     else{
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = cheif[i])
      document.querySelector(".preview_img").src = '/img/cheif/1.png';
      document.querySelector(".fotosmall1").src = '/img/cheif/small1.png'
      document.querySelector(".fotosmall2").src = '/img/cheif/small2.png'
      document.querySelector(".fotosmall3").src = '/img/cheif/small3.png'
     }
     this.classList.toggle('tabheader_char-item-active');
   });
};

preview.forEach(border => {
  border.addEventListener('click', () => {
    preview.forEach((border) => border.classList.remove('preview_small-img-active'));
    border.classList.add('preview_small-img-active');
    if (button.classList.contains("tabheader_char-item-active") && border.classList.contains("preview_small-img")){
    if(border.classList.contains("fotosmall1")){     
      document.querySelector(".preview_img").src = '/img/cheif/1.png'

  } else if(border.classList.contains("fotosmall2")){
      document.querySelector(".preview_img").src = '/img/cheif/2.png'
  }else{
      document.querySelector(".preview_img").src = '/img/cheif/3.png'
  }

} else {
    if(border.classList.contains("fotosmall1")){
      document.querySelector(".preview_img").src = '/img/gusto/1.png'
  } else if(border.classList.contains("foto2")){
     
    document.querySelector(".preview_img").src = '/img/gusto/2.png'
  }else{
    document.querySelector(".preview_img").src = '/img/gusto/3.png'
  }

}
});
})

let openh = document.querySelector('.bot-send-mail');
const closeh = document.querySelector('.message_sec')
let form = document.forms.zvonok; // <form name="my"> element
let elem = form.elements.user_name; // <input name="one"> element

openh.addEventListener('click', () => { 
  if(document.getElementById("user_name").value === '') {
  }else{
    openh.addEventListener('click', () => { 
      closeh.classList.add("message_sec-active")
      setTimeout(function(){
        location.reload();
      }, 2000);
     })
  }
})


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (char);

/***/ }),

/***/ "./js/modules/reboot.js":
/*!******************************!*\
  !*** ./js/modules/reboot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function reboot(){
    $(function() {
        $('form').submit(function() {
            var formData = new FormData($(this)[0]);
            $.ajax({
                type: 'POST',
                url: 'telegram.php',
                data: formData,
                processData: false,
                contentType: false,
            });
            return false;
        }); 
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reboot);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $(function(){
        $('.minimized').click(function(event) {
          var i_path = $(this).attr('src');
          $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
          $('#magnify').css({
        //    left: ($(document).width() - $('#magnify').outerWidth())/2,
        //     top: ($(window).height() - $('#magnify').outerHeight())/2
         });
          $('#overlay, #magnify').fadeIn('fast');
        });
        
        $('body').on('click', '#close-popup, #overlay', function(event) {
          event.preventDefault();
          $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
          });
        });
      });
}

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
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/char */ "./js/modules/char.js");
/* harmony import */ var _modules_reboot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/reboot */ "./js/modules/reboot.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';




window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_char__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_modules_reboot__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])()
    

})  

})();

/******/ })()
;
//# sourceMappingURL=bundle2.js.map