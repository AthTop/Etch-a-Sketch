function createDiv(className) {
    const newDiv = document.createElement("div")
    newDiv.classList.add(className)
    return newDiv;
}

const container = createDiv('flex-container')
document.body.appendChild(container)

for (let i = 0; i < 16; i++) {
    container.appendChild(createDiv("flex-row"))
    for (let j = 0; j < 16; j++) {
        container.lastChild.appendChild(createDiv("cell"))
    }
}

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener("mouseenter", (e) => {
        e.target.style.background = 'blue';
    });
});
