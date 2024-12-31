
const DEFAULT_SQUARES_PER_SIDE = 4

const container = document.querySelector("#container")
const newButton = document.querySelector("#new-button")

let squareArray = []

function createGrid(squaresPerSide) {

    let squareSize = parseInt(container.offsetWidth / squaresPerSide)

    for(let i = 0; i < squaresPerSide * squaresPerSide; i ++){
        const square = document.createElement("div")
        square.id = i
    
        /* 
            offsetWidth property is read-only, so we ha to use width and heigt sltyling for dimensions
        */
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
    
        /*  
            setting opacity in style sheet was not functional
        */
        square.style.opacity = 1
        squareArray.push(square)
        container.appendChild(square)
    }
    
}

function deleteGrid() {
    squareArray.forEach((square) => {
        square.remove()
    })
}

/* events */

window.addEventListener("load", () => {
    createGrid(DEFAULT_SQUARES_PER_SIDE)
})

newButton.addEventListener("click", () => {    

    let newGridSquaresPerSide = prompt("Set the new grid dimension (max 100 square per side):")

    if(isFinite(newGridSquaresPerSide) && newGridSquaresPerSide > 0) {
        if(newGridSquaresPerSide > 100) {
            newGridSquaresPerSide = 100
        }
        deleteGrid()
        createGrid(newGridSquaresPerSide)           
    } else alert("not a valid value")

})

container.addEventListener("mouseover", (event) => {
    const id = event.target.id
    const square = squareArray[id]
    square.classList.add("active")
    if(square.style.opacity > 0) {
        square.style.opacity -= 0.1
    }
})

/*
    - how to delete elements from DOM   DONE
    - page opening event
    - custom event and event retrieve

*/

