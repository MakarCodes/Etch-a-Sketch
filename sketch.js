const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
const resizeButton = document.querySelector('#resize');
let colorOption = document.querySelector('#color-option');

function createGrid(rows, columns){
    // for index 0, next loop goes 'columns' number times
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++){
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

function resizeGrid(){
    let cellNumber = prompt("Please enter the scale of the grid:");
    createGrid(cellNumber,cellNumber);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridGap = '1px';
    gridContainer.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
}

defaultGrid();

function randomGreyHex() {
    //bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
    let v = (Math.random()*(256)|0).toString(16); //bitwise OR
    return "#" + v + v + v;
};

gridContainer.addEventListener('mouseover', e => {
    if(e.target.classList.contains('cell'))
        if(colorOption.value == 'black'){
            e.target.style.backgroundColor = 'black';
        } else if(colorOption.value == 'random-rainbow'){
            e.target.style.backgroundColor = '#'+Math.floor(Math.random()*
            16777215).toString(16);
        } else if(colorOption.value == 'random-scale-grey'){
            e.target.style.backgroundColor = randomGreyHex();
        }
})

resizeButton.addEventListener('click', e => {
    //removing all cells which were created before 
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    };
    resizeGrid();
})

function gridReset(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach( function(cell) {
        if (!(cell.getAttribute('style') == null)) {
            cell.removeAttribute('style');
    }})
}
resetButton.addEventListener('click', e => {
    gridReset()
    // const cells = document.querySelectorAll('.cell');
    // cells.forEach( function(cell) {
    //     if (!(cell.getAttribute('style') == null)) {
    //         cell.removeAttribute('style');
    // }})
    // for (let i = 0; i < cells.length; i++) {
    //     if (!((cells[i]).getAttribute('style') == null)) {
    //         cells[i].removeAttribute('style');
    //     }
    // }
});






