// const grid is needed for DOM methods
const grid = document.querySelector('.sketch');




function createPixels (row, column){
    for (let i = 1; i <= row; ++i) {
        const makeRow = document.createElement('div');
        makeRow.classList.add("row");
        grid.appendChild(makeRow);
        for (let j = 1; j <= column; ++j){
            const makeCol = document.createElement('div');
            makeCol.classList.add("col");
            makeRow.appendChild(makeCol);
        }
    } 
}

createPixels(12, 12);

// START HERE
const fill = document.querySelector('.row');
fill.addEventListener('mouseover', ()=> {
    makeRow.setAttribute('style', 'background-color: blue');
})
