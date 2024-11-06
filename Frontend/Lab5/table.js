const SIZE = 6; 

let table = document.getElementById("table");
let counter = 1;

for (let i = 0; i < SIZE; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < SIZE; j++) {
        let cell = document.createElement("td");
        cell.innerHTML = counter;
        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}

let colorPicker = document.getElementById("color-picker");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isVariantCell(cellNumber) {
    const variantNumber = 4;
    return cellNumber === variantNumber;
}

table.addEventListener('mouseover', function(event) {
    let hoveredCell = event.target;
    if (hoveredCell.tagName === 'TD') {
        const cellNumber = parseInt(hoveredCell.innerHTML);
        if (isVariantCell(cellNumber)) {
            hoveredCell.style.backgroundColor = getRandomColor();
        }
    }
});

table.addEventListener('click', function(event) {
    let clickedCell = event.target;
    if (clickedCell.tagName === 'TD') {
        const selectedColor = colorPicker.value;
        clickedCell.style.backgroundColor = selectedColor;
    }
});

table.addEventListener('dblclick', function(event) {
    let clickedCell = event.target;
    if (clickedCell.tagName === 'TD') {
        const cellNumber = parseInt(clickedCell.innerHTML);
        if (isVariantCell(cellNumber)) {
            changeSecondaryDiagonalColor(); 
        }
    }
});

function changeSecondaryDiagonalColor() {
    for (let i = 0; i < SIZE; i++) {
        let row = table.rows[i];
        let cell = row.cells[SIZE - i - 1];
        const selectedColor = colorPicker.value;
        cell.style.backgroundColor = selectedColor;
    }
}
