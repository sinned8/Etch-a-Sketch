


let gridsize;
document.querySelector('#promptBttn').addEventListener('click', function (e) {
    let gridsize = 10;
    do {
        gridsize = +prompt('Enter a grid size [max: 100]')
    } while (gridsize > 100)
    
    makeGrid(gridsize);

})
// let rows = gridsize;
// let cols = gridsize;
const container = document.querySelector('#container');
function makeGrid(gridsize){
    container.innerHTML = '';
   
    for (var i = 0; i < (gridsize * gridsize); i++){
        let box = document.createElement('div');
        box.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
        container.appendChild(box);
    }
}


const box = document.querySelectorAll('.box');
[...box].forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hover');
    });
})


