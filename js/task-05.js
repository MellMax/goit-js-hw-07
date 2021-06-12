
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.oninput  = function () {
    if (inputEl.value === '') {
       outputEl.innerHTML = 'незнакомец';
    } else{
        outputEl.innerHTML = inputEl.value;
    }
}
inputEl.addEventListener('input', inputEl);
