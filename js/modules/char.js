function char(){

const buttons = document.querySelectorAll(".tabheader_char-item");
const cheif = ['11кг','111x111(мм)', '111x111(мм)', '20 мин', '2 кг/ч', '1500р']
const gusto = ["64кг", "600x400(мм)", "185x470(мм)", "20 мин", "2 кг/ч", '1810р']

for (const button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('tabheader_char-item-active')
     );
     if(this.classList.contains("gusto"))
     {
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = gusto[i])
      document.querySelector(".preview_img").src = '/img/Gusto.png';
     }
     else{
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = cheif[i])
      document.querySelector(".preview_img").src = '/img/Cheif.png';
     }
     this.classList.toggle('tabheader_char-item-active');
   });
};
}


export default char;