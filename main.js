const mainCurrencyTable = document.querySelector('.main-currency-table');
const mainCommissionsTable = document.querySelector('.main-commissions-table');
const spanLeft = document.querySelector('.span-left');
const spanRight = document.querySelector('.span-right');

spanLeft.addEventListener('click', toggleMainCommissionsTable);
spanRight.addEventListener('click', toggleMainCurrencyTable);

function toggleMainCommissionsTable(){
  mainCommissionsTable.classList.toggle('inactive');
  mainCurrencyTable.classList.toggle('inactive');
}
function toggleMainCurrencyTable(){
  mainCurrencyTable.classList.toggle('inactive');
  mainCommissionsTable.classList.toggle('inactive');
}