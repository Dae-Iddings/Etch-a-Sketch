const container = document.querySelector('.container')
let numOfDivs = alert('Enter grid size. Maximum 100 x 100');
function createDivs(num) {
for (let i = 0; i < num; i++) {
    const gridDivs = document.createElement('div');
    gridDivs.classList.add('gridDiv');
    container.appendChild(gridDivs);
}
}