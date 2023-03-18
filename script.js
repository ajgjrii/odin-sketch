let n = 4;
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

// This function will be copied/pasted into buttons to change grid size
function generator (input) {
    n = input;
    // These two lines remove all child nodes for div.sketch
    const sketch = document.querySelector('.sketch');
    removeAllChildNodes(sketch);
    // this calls the pixel creation function
    createPixels(n,n);
    // These two lines create the ability to fill
    const filling = Array.from(document.querySelectorAll('.col'));
    filling.forEach(filling => filling.addEventListener('mouseover', fill));
}

// const grid is needed for DOM methods
const grid = document.querySelector('.sketch');
// These two lines allow reset button to remove div.filler
const reset = document.querySelector('#reset');
reset.addEventListener('click', clear)

// This will display dimensions for grid
const controlSpace = document.querySelector('.controls');
const dimensions = document.createElement('h3');
dimensions.textContent = `DIMENSIONS: ${n} x ${n}`;
controlSpace.appendChild(dimensions);

generator(n);

// Block is control for button
const plusten = document.querySelector('#plusten');
plusten.addEventListener('click', () => {
    if (n < 40){    
        n = n + 10;
        generator(n);
        dimensions.textContent = `DIMENSIONS: ${n} x ${n}`
        return n;
    }
})

// Block is control for button
const minusten = document.querySelector('#minusten');
minusten.addEventListener('click', () => {
    if (n > 10) {
        n = n - 10;
        generator(n);
        dimensions.textContent = `DIMENSIONS: ${n} x ${n}`
        return n;
    }
})

// Block is control for button
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (n < 50){
        ++n;
        generator(n);
        dimensions.textContent = `DIMENSIONS: ${n} x ${n}`
        return n;
    }
})

// Block is control for button
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (n > 1){
        --n;
        generator(n);
        dimensions.textContent = `DIMENSIONS: ${n} x ${n}`
        return n;
    }
})

