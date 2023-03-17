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

// Array needed for SelectorAll
const filling = Array.from(document.querySelectorAll('.col'));


// forEach is needed since filling is an array
filling.forEach(filling => filling.addEventListener('mouseover', fill));



// function adds a class called "filler" to any div.col elements
function fill() {
    this.classList.add('filler');
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    const empty = Array.from(document.querySelectorAll('.filler'));
    empty.forEach(empty => empty.classList.remove('filler'));
})
