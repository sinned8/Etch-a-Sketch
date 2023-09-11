



function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (var i = 0; i < (rows * cols); i++){
        var box = document.createElement('div');
        box.className = 'box';
        container.appendChild(box)
    }
}

makeGrid(16, 16);