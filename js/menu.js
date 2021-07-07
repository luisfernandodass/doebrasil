const menuHamburguer = document.querySelector('.fa-bars');
const menuX = document.querySelector('.fa-times');
const tagUl = document.querySelector('.menu');
const container = document.querySelector('.container');
const h1 = document.querySelector('.areas');

function menuToggle(){
  menuHamburguer.style.display = "none";
 
  tagUl.style.display = "flex";
  container.style.display = "none";
  h1.textContent = " ";
}

function closeMenuToggle(){
   menuHamburguer.style.display = "block";
  tagUl.style.display = "none";
  container.style.display = "flex";
}

menuX.addEventListener('click', closeMenuToggle);
menuHamburguer.addEventListener('click', menuToggle);