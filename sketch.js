const gridContainer = document.querySelector('#grid-container');

function createGrid(rows, columns){
    // for index 0, next loop goes 'columns' number times
    for(let i = 0; i <= rows; i++) {
        for(let j = 0; j<= columns; j++){
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            gridContainer.appendChild(cell);
        }
    }
}

function defaultGrid(){
    createGrid(5,5);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridGap = '1px';
    gridContainer.style.gridTemplateColumns = 'repeat(5, 99.2px)';
    gridContainer.style.gridTemplateRows = 'repeat(5, 99.2px)';
}

defaultGrid();


