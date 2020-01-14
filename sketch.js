const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');

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
    createGrid(16,16);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridGap = '1px';
    gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
}

defaultGrid();

gridContainer.addEventListener('mouseover', e => {
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = 'black';
    }
})

resetButton.addEventListener('click', e => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach( function(cell) {
        if (!(cell.getAttribute('style') == null)) {
            cell.removeAttribute('style');
    }})
    // for (let i = 0; i < cells.length; i++) {
    //     if (!((cells[i]).getAttribute('style') == null)) {
    //         cells[i].removeAttribute('style');
    //     }
    // }
});




