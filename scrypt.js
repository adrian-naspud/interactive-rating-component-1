const form = document.querySelector('#valoration');
const inputs = document.querySelectorAll('.valoration__input');
const valorationState = document.querySelector('.select-rating-container');
const thanksState = document.querySelector('.rating__thanks');
const selection = document.querySelector('.selection');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('work');
  inputs.forEach((item) => {
    if (item.checked) {
      selection.innerHTML = `You selected ${item.value} out of 5`;
      valorationState.style.display = 'none';
      thanksState.style.display = 'block';
    } else {
      errorMsg.style.display = 'block';
    }
  });
});