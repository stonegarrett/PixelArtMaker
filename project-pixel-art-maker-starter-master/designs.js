// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


    
// Your code goes here!

const tableArea = document.querySelector('#pixelCanvas');
const tableWidth = document.getElementById('inputWidth');
const tableHeight = document.getElementById('inputHeight');
const submitButton = document.querySelector('.submit');
const colorSelector = document.getElementById('colorPicker');

let numOfRows = 5;
let numOfCol = 5;

let chosenColor = colorSelector.value;
colorSelector.addEventListener('input', function () {
    colorSelector.style.backgroundColor = colorSelector.value;
    chosenColor = colorSelector.value;
})


submitButton.onclick = function(e) {
    e.preventDefault();
    removeChildElements(tableArea)
    numOfCol = tableWidth.value;
    numOfRows = tableHeight.value;
    makeGrid(numOfRows, numOfCol);
};


function makeGrid(numOfRows, numOfCol) {
    for (let i = 1; i <= numOfRows; i++) {
        newRow = document.createElement('tr');
        tableArea.appendChild(newRow);
        for (let j = 1; j <= numOfCol; j++) {
            newCol = document.createElement('td');
            newRow.appendChild(newCol);
        }
    } addEventListeners()
};


function removeChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


function addEventListeners() {
    let tdObjects = document.querySelectorAll('td')
    tdObjects.forEach(element => {
        element.addEventListener('click', function (){
            element.style.backgroundColor = chosenColor;
    })})};


function onStart() {
    makeGrid(numOfRows, numOfCol);
}

onStart();