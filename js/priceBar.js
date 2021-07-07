const barWhite = document.querySelector('.bar-white');
const barBlue = document.querySelector('.bar-blue');
const priceFive = document.querySelector('.price-five');
const priceFifteen = document.querySelector('.price-fifteen');
const priceThirty = document.querySelector('.price-thirty');

function fillBarBlue(){
 barBlue.style.width = "10px";
}

priceFive.addEventListener('click', fillBarBlue);