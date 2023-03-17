// const grid is needed for DOM methods
const grid = document.querySelector('.sketch');




function createPixels (row, column){
    n=1;

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

createPixels(8,8);


const pixel = Array.from(document.querySelectorAll('.col'));
pixel.forEach(pixel => pixel.addEventListener('mouseover', fill));



function fill() {
    //var fillMe = document.getElementsByClassName('col');
    this.classList.add('filler');
}