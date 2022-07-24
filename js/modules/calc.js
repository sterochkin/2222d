    function  calc() {
    const prices = [
        20, 30, 50, 10, 25, 90, 55
      ];
      
      let current_price = 0;
      
      const buttons = document.querySelectorAll('.calculating__choose-item');
      const price_out = document.querySelector('.price_out');
      
      for(let i = 0; i < buttons.length; i++)
      {
        buttons[i].addEventListener('click', function()
        {
          if(this.classList.contains('calculating__choose-item_active'))
          {
            this.classList.remove('calculating__choose-item_active');
            current_price -= prices[i];
          }
          else {
            this.classList.add('calculating__choose-item_active');
            current_price += prices[i];
          }
      
          if(current_price > 0) price_out.textContent = `${current_price}`;
          else price_out.textContent = '___';
        });
    }
}
    export default calc;