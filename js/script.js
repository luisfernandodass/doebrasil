const buttonConfirmDonation = document.querySelector('.confirm-donation');
const buttonCloseConfirmDonation = document.querySelector('.fa-times');
const thanks = document.querySelector('.thanks')

function confirmDonation(){
  thanks.style.display = "block";
}

function closeConfirmDonation(){
  thanks.style.display = ""
}

buttonConfirmDonation.addEventListener('click', confirmDonation);
buttonCloseConfirmDonation.addEventListener('click', closeConfirmDonation);