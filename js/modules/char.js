function char(){

const buttons = document.querySelectorAll(".tabheader_char-item");
const cheif = ['11кг','111x111(мм)', '111x111(мм)', '20 мин', '2 кг/ч']
const gusto = ["64кг", "600x400(мм)", "185x470(мм)", "20 мин", "2 кг/ч"]

for (const button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('tabheader_char-item-active')
     );
     if(this.classList.contains("gusto"))
     {
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = gusto[i])
      document.querySelector(".preview_img").src = 'http://placehold.jp/850x570.png';
     }
     else{
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = cheif[i])
      document.querySelector(".preview_img").src = 'https://andinvest.ru/wp-content/uploads/2021/07/pticy-i-flag-850x570.jpg';
     }
     this.classList.toggle('tabheader_char-item-active');
   });
};
}


export default char;