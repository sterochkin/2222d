require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


import calc from './modules/calc';
import slider from './modules/slider';
import char from './modules/char'

window.addEventListener('DOMContentLoaded', () => {

    calc()
    char()
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    })

})  
