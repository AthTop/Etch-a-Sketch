function createDiv(className) {
    const newDiv = document.createElement("div")
    newDiv.classList.add(className)
    return newDiv;
}

const container = createDiv('flex-container')
document.body.appendChild(container)

function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function generateGrid(size){
    clearContainer()
    for (let i = 0; i < size; i++) {
        container.appendChild(createDiv("flex-row"))
        for (let j = 0; j < size; j++) {
            container.lastChild.appendChild(createDiv("cell"))
        }
    }
    const cells = document.querySelectorAll('.cell')
    let counter = 9;
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.background = randomColor()
            e.target.style.filter = 'brightness(' + counter/10 + ')'
            counter -= 1
            if (counter < 0) {
                counter = 9
            }
            console.log(counter)
        });
});
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetBoard);

function resetBoard(){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.background = '#eeeeee'
        cell.style.filter = 'brightness(1)'
    })
}

const newGridButton = document.getElementById('new')

newGridButton.addEventListener('click', () => {
    let size = prompt("Enter grid size")
    generateGrid(size)
});

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}