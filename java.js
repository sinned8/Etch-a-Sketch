



function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (var i = 0; i < (rows * cols); i++){
        let box = document.createElement('div');
        box.className = 'box';
        container.appendChild(box)
    }
}

makeGrid(16, 16);

const box = document.querySelectorAll('.box');
[...box].forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hover');
    });
})