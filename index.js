// the idea here is first to have the behavior of clicking a number implemented

const calculatorDiv = document.querySelector('.calculator')
const display = document.querySelector('.display')

calculatorDiv.addEventListener('click', function (event) {
    if (event.target.matches('.clear-button')) {
        display.innerText = '0';
    }
    
    if (event.target.matches('.number')) {
        if (display.innerText === '0'){
            display.innerText = ''
        }
        display.innerText += event.target.innerText
    }
});
