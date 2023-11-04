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
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.background = 'red';
        });
});
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetBoard);

function resetBoard(){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.background = '#eeeeee'
    })
}

const newGridButton = document.getElementById('new')

newGridButton.addEventListener('click', () => {
    let size = prompt("Enter grid size")
    generateGrid(size)
});


