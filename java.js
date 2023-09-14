
//dec global var
const container = document.querySelector('#container');
let gridsize;


//set button up to let user choose size of grid
document.querySelector('#promptBttn').addEventListener('click', function (e) {
    let gridsize = 10;
    do {
        gridsize = +prompt('Enter a grid size [max: 100]')
    } while (gridsize > 100)
    makeGrid(gridsize);
})


//create grid and also add mouse over listener that calls colorGrid func
function makeGrid(gridsize){
    container.innerHTML = '';
    for (var i = 0; i < (gridsize * gridsize); i++){
        let box = document.createElement('div');
        box.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
        container.appendChild(box);
        box.addEventListener('mouseover',colorGrid)
    }
}


//add the class hover to each box
function colorGrid(e){
            e.target.classList.add('hover');
    }



// const reset button and clear the hover effect
const resetBttn = document.querySelector('#resetBttn');
function resetGrid(){
    let box = container.querySelectorAll('div');
    box.forEach(box=> box.classList.remove('hover'));
}
resetBttn.addEventListener('click', ()=>resetGrid());


// const bwBttn = document.querySelector('#bwMode');
// function bw(){
//     let box = container.querySelectorAll('div');
//     box.forEach(box=> box.style.backgroundColor='red');

// }
// bwBttn.addEventListener('click', ()=>bw());


// set the default grid size to 16 upon window loading
window.onload = makeGrid(16);



