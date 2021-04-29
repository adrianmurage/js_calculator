// the idea here is first to have the behavior of clicking a number implemented

const calculatorDiv = document.querySelector('.calculator')

calculatorDiv.addEventListener('click', function(event){
    // console.log(event.target.querySelector('.number'))
    if(event.target.tagName === 'BUTTON' && event.target.matches('.number')) {
        console.log(`you clicked ${event.target.innerText}`)
    }
})
