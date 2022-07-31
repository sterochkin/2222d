function calc(){
const buttons = document.querySelectorAll('.calculating__choose-item'),
      city_container = document.querySelector('.city_container'),
      price_out = document.querySelector('.price_out'),
      shipping_cost_out = document.querySelector('.shipping-cost_out'),
      price_out_all = document.querySelector('.price_out_all');

const prices = [
20, 30, 50, 10, 25, 90, 55
];

 const city_list = 
 [
   {name: " ", shipping_cost: 0},
   {name: "Витебск", shipping_cost: 100},
   {name: "Минск", shipping_cost: 200},
   {name: "Гродно", shipping_cost: 300}
 ];

let current_price = 0;
let shipping_cost = 0;


function CreateDeliveryCities() {

const fragment = document.createDocumentFragment();

city_list.map((elem) => {
const option_node = document.createElement('option');

option_node.className = 'city_container';
option_node.textContent = `${elem.name}`;

fragment.append(option_node);
})

city_container.append(fragment);

city_container.addEventListener('change', function() {

shipping_cost = city_list[city_container.selectedIndex].shipping_cost;
ShowPrices();
})

shipping_cost = prices[0].shipping_cost;
ShowPrices();
}

function CreateButtonsHandler() {

for (let i = 0; i < buttons.length; i++) {

buttons[i].addEventListener('click', function() {

if (this.classList.contains('calculating__choose-item_active')) {

  this.classList.remove('calculating__choose-item_active');
  current_price -= prices[i];
}
else {

  this.classList.add('calculating__choose-item_active');
  current_price += prices[i];
}

ShowPrices();
});
}
}

function ShowPrices()
{
if(shipping_cost >= 0) {
price_out.textContent = `${current_price}`;
shipping_cost_out.textContent = `${shipping_cost}`;
price_out_all.textContent = `${current_price + shipping_cost}`;
} 
else {
price_out.textContent = `${current_price}`;
shipping_cost_out.textContent = '0';
price_out_all.textContent = `${current_price}`;
}
}

CreateButtonsHandler();
CreateDeliveryCities();
}
export default calc;