require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import char from './modules/char'
import reboot from './modules/reboot'

window.addEventListener('DOMContentLoaded', () => {

    char()
    reboot()
    

})  
