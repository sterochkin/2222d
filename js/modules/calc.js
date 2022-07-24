   function  calc() {

    // const city_container = document.querySelector('.city-container'),
    //       shipping_cost_out = document.querySelector('.shipping-cost_out');
    // const fragment = document.createDocumentFragment();

    // const city_list = [
    //   {name: "Витебск", shipping_const: 100},
    //   {name: "Минск", shipping_const: 100},
    //   {name: "Гродно", shipping_const: 100}
    // ];

    // function AddCityList()
    // {
    //   for(let i = 0; i < city_list.length; i++){
    //     const element = document.createElement('option')

    //     element.className = 'city-container_element';
    //     element.value = `${i}`;
    //     element.textContent = `${city_list[i].name}`;

    //     fragment.append(element);
    //   }
    //   city_container.append(fragment)
    // }
    
    // city_container.addEventListener('change', function(){
    //   ShowShippingCost(city_container.selectedIndex)
    // })
    // function ShowShippingCost(city_index){
    //   shipping_cost_out.textContent = `${city_list[city_index].shipping_cost}`
    // }
    
    // AddCityList()
    // ShowShippingCost(1)

     const prices = [
        10, 15, 1, 2, 3, 4, 5
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