function char(){

const preview = document.querySelectorAll(".preview_small-img")
const circle = document.querySelectorAll(".preview__color-border")
const buttons = document.querySelectorAll(".tabheader_char-item");
const cheif = ['11кг','111x111(мм)', '111x111(мм)', '20 мин', '2 кг/ч', '1500р']
const gusto = ["64кг", "600x400(мм)", "185x470(мм)", "20 мин", "2 кг/ч", '1810р']

preview.forEach(border => {
  border.addEventListener('click', () => {
    preview.forEach((border) => border.classList.remove('preview_small-img-active'));
    border.classList.add('preview_small-img-active');
  });
})


circle.forEach(color => {
  color.addEventListener('click', () => {
    circle.forEach((color) => color.classList.remove('preview__color-border-active'));
    color.classList.add('preview__color-border-active');
  });
})

for (const button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('tabheader_char-item-active')
     );
     if(this.classList.contains("gusto"))
     {
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = gusto[i])
      document.querySelector(".preview_img").src = '/img/Gusto.png';
      document.querySelector(".foto1").src = '/img/gusto/1.png'
      document.querySelector(".foto2").src = '/img/gusto/2.png'
      document.querySelector(".foto3").src = '/img/gusto/3.png'
     }
     else{
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = cheif[i])
      document.querySelector(".preview_img").src = '/img/Cheif.png';
      document.querySelector(".foto1").src = '/img/cheif/1.png'
      document.querySelector(".foto2").src = '/img/cheif/2.png'
      document.querySelector(".foto3").src = '/img/cheif/3.png'
     }
     this.classList.toggle('tabheader_char-item-active');
   });
};
}


export default char;