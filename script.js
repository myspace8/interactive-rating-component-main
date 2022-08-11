const submitBtn = document.getElementById('submit');
const rateBtn = document.querySelectorAll('.rate-btn button');
const rateNumberSelected = document.querySelector('.rate-number-selected');
const b4Submit = document.querySelector('.b4-submit');
const afterSubmit = document.querySelector('.after-submit');


rateBtn.forEach(button => {
    button.addEventListener('click', () => {
        rateNumberSelected.innerHTML = button.value;
    })
});


submitBtn.addEventListener('click', () => {
    b4Submit.style.display = 'none';
    afterSubmit.style.display = 'flex';
})