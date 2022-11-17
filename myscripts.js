const container = document.querySelector('.container') // selects container div 
const resetButton = document.querySelector('button'); // selects button 
function createDivs(num) { // takes a number and creates that many divs with class gridDiv
for (let i = 0; i < num; i++) { // loop until i = the input number 
    const gridDivs = document.createElement('div');
    gridDivs.classList.add('gridDiv');
    container.appendChild(gridDivs);
}
}
resetButton.addEventListener('click', function(e) { // when the reset button is clicked
    document.querySelectorAll('.gridDiv').forEach(gridDiv => {
        container.removeChild(gridDiv)
    })
    let input = prompt('Enter grid size'); // prompt player to input the grid size they want
    if (input <= 100 && input > 0) {  // if the input is less than 100 but more then 0 
        let num = input * input // finds area to create correct number of divs
        createDivs(num) 
        let px = 500 / input; // finds what the width and height of each box should be to fit in 500 x 500 container
        document.querySelectorAll('.gridDiv').forEach(gridDiv => { // for each div with a class of grid div
            gridDiv.addEventListener('mouseover', function(e)  { // look for when div is hovered over
                let randomNumber = Math.floor(Math.random() * 11);
                if (randomNumber === 0) {
                    e.target.classList.add('black');
                } else if (randomNumber === 1) {
                    e.target.classList.add('red');
                } else if (randomNumber === 2) {
                    e.target.classList.add('orange');
                } else if (randomNumber === 3) {
                    e.target.classList.add('yellow');
                } else if (randomNumber === 4) {
                    e.target.classList.add('green');
                } else if (randomNumber === 5) {
                    e.target.classList.add('blue');
                } else if (randomNumber === 6) {
                    e.target.classList.add('purple');
                } else if (randomNumber === 7) {
                    e.target.classList.add('pink');
                } else if (randomNumber === 8) {
                    e.target.classList.add('light-blue');
                } else if (randomNumber === 9) {
                    e.target.classList.add('indigo');
                } else {
                    e.target.classList.add('brown');
                }
               })
            gridDiv.style.width = `${px}px`; // adds correct width and height
        gridDiv.style.height = `${px}px`; 
        })
        container.style.gridTemplateColumns = `repeat(${input}, ${px}px [col-start])`; // makes grid correct size
    } else { // if number is to big or small give an error
        alert('error enter a number between 1 and 100')
    }
})
