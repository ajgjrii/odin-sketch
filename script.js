// function creates the "pixels" in div.sketch
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

// function adds a class called "filler" to any div.col elements
function fill() {
    this.classList.add('filler');
}

// function is used for resetting filled boxes
function clear() {
    const empty = Array.from(document.querySelectorAll('.filler'));
    empty.forEach(empty => empty.classList.remove('filler'));
 }

// This function will remove all child nodes in DOM (parent is div.sketch)
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
 }

const remove = document.querySelector('#xxx');
remove.addEventListener('click', ()=> {
    const sketch = document.querySelector('.sketch');
    removeAllChildNodes(sketch);
})



// const grid is needed for DOM methods
const grid = document.querySelector('.sketch');

const ten = document.querySelector('#ten');
ten.addEventListener('click', () => {
    const sketch = document.querySelector('.sketch');
    removeAllChildNodes(sketch);
    createPixels(10, 10);
    // These two lines create the ability to fill
    const filling = Array.from(document.querySelectorAll('.col'));
    filling.forEach(filling => filling.addEventListener('mouseover', fill));
});

const fifteen = document.querySelector('#fifteen');
fifteen.addEventListener('click', () => {
    const sketch = document.querySelector('.sketch');
    removeAllChildNodes(sketch);
    createPixels(15,15);
    // These two lines create the ability to fill
    const filling = Array.from(document.querySelectorAll('.col'));
    filling.forEach(filling => filling.addEventListener('mouseover', fill));
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', clear)


 

