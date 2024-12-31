
let squaresPerSide = 4

const container = document.querySelector("#container")
const newButton = document.querySelector("#new-button")

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

    /*
        "this" is not available inside arrow functions
    */
    square.addEventListener("mouseover", function() {
        this.classList.add("active")
        if(square.style.opacity > 0) {
            square.style.opacity -= 0.1
        }
    })

    container.appendChild(square)
}

newButton.addEventListener("click", () => {
    prompt("Set the new grid dimension:")
})