const barBlue = document.querySelector('.bar-blue');
const priceFive = document.querySelector('.price-five');
const priceFifteen = document.querySelector('.price-fifteen');
const priceThirty = document.querySelector('.price-thirty');

function fillBarBlueFive(){
 barBlue.style.width = "4.5%";
}

function fillBarBlueFifteen(){
  barBlue.style.width = "13%";
 }

 function fillBarBlueThirty(){
  barBlue.style.width = "21.5%";
 }

priceFive.addEventListener('click', fillBarBlueFive);
priceFifteen.addEventListener('click', fillBarBlueFifteen);
priceThirty.addEventListener('click', fillBarBlueThirty);