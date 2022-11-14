const container = document.querySelector('.container') // selects container div 
let numOfDivs = prompt('Enter grid size. Maximum 100 x 100');  //takes user input 
function createDivs(num) {
for (let i = 0; i < num; i++) { // loop until i = the input number 
    const gridDivs = document.createElement('div');
    gridDivs.classList.add('gridDiv');
    container.appendChild(gridDivs);
}
}
createDivs(numOfDivs);