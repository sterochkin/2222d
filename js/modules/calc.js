function calc() {
    // Calculator

    const result = document.querySelector('.calculating__result span');
    
    let size, ratio;

    if (localStorage.getItem('size')) {
        size = localStorage.getItem('size');
    } else {
        localStorage.setItem('size', 'cheif');
    }
    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1;
        localStorage.setItem('ratio', 1);
    }
    

    function calcTotal() {
        const Cheif = document.getElementById("cheif");
        const cenaCheif = Cheif.getAttribute("cena");
        const gusto = document.getElementById("gusto");
        const cenaGusto = gusto.getAttribute("cena");

        if (size !=='cheif' && size !=='gusto' && !ratio) {
            result.textContent = '___';
            return;
        }  
}
    calcTotal();

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('size')) {
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    size = e.target.getAttribute('id');
                    localStorage.setItem('size', e.target.getAttribute('id'), e.target.getAttribute('size'));
                }

                let contains = e.target.classList.contains(activeClass)
                
                if (contains == false){
                    e.target.classList.add(activeClass)
                }else if (contains == true){
                    e.target.classList.remove(activeClass)
                }else elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                })  

               calcTotal();  
          });
        });
 }
                // elements.forEach(elem => {
                //     elem.classList.remove(activeClass);
                // });
    
                // e.target.classList.add(activeClass);
            
 
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    // function getDynamicInformation(selector) {
    //     const input = document.querySelector(selector);

    //     input.addEventListener('input', () => {
    //         if (input.value.match(/\D/g)) {
    //             input.style.border = "1px solid red";
    //         } else {
    //             input.style.border = 'none';
    //         }
    //         switch(input.getAttribute('id')) {
    //             case "height":
    //                 height = +input.value;
    //                 break;
    //             case "weight":
    //                 weight = +input.value;
    //                 break;
    //             case "age":
    //                 age = +input.value;
    //                 break;
    //         }

    //         calcTotal();
    //     });
    // }

    // getDynamicInformation('#height');
    // getDynamicInformation('#weight');
    // getDynamicInformation('#age');

}

export default calc;