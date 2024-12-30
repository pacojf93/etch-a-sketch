
let squaresPerSide = 4

const container = document.querySelector("#container")

let squareSize = parseInt(container.offsetWidth / squaresPerSide)

for(let i = 0; i < squaresPerSide * squaresPerSide; i ++){
    const square = document.createElement("div")
    square.id = i
    square.textContent = i

    /* 
        offsetWidth property is read-only, so we ha to use width and heigt sltyling for dimensions
    */
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`

    /*
        "this" is not available inside arrow functions
    */
    square.addEventListener("mouseover", function() {
        this.classList.toggle("active")
    })

    container.appendChild(square)
}