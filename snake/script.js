
//Variável com o valor do movimento
var moveValueTop = 50
var moveValueLeft = 50

// Função de tempo de espera equivalente a sleep no python
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Transforma em stringo  valor do movimento e descrescenta -1
function calcMoveQuantityNegativeVertical(){
    moveValueTop-= 5
    //if(moveValueTop == 0) {
    //    moveValueTop = 50
    //    moveValueLeft = 50
    //}    
}

// Transforma em stringo  valor do movimento e acrescente +1
function calcMoveQuantityPositiveVertical(){
    moveValueTop+= 5
    //if (moveValueTop == 100) {
    //    moveValueTop = 50
    //    moveValueLeft = 50
    //}
}
// Transforma em stringo  valor do movimento e descrescenta -1
function calcMoveQuantityNegativeHorizontal(){
    moveValueLeft-= 5
    //if(moveValueLeft == 0) {
    //    moveValueLeft = 50
    //    moveValueTop = 50
    //}
}

// Transforma em stringo  valor do movimento e acrescente +1
function calcMoveQuantityPositiveHorizontal(){
    moveValueLeft+= 5
    //if(moveValueLeft == 100) {
    //    moveValueLeft = 50
    //    moveValueTop = 50
    //}
}

// Move para cima alterando a posição da div
function moveUp(){
    var snakeElement = window.document.getElementById("snake-body");
    snakeElement.style.top = `${moveValueTop.toString()+"px"}`;
}

function moveDown() {
    var snakeElement = window.document.getElementById("snake-body");
    snakeElement.style.top = `${moveValueTop.toString()+"px"}`;
}

function moveRight () {
    var snakeElement = window.document.getElementById("snake-body");
    snakeElement.style.left = `${moveValueLeft.toString()+"px"}`;
}

function moveLeft () {
    var snakeElement = window.document.getElementById("snake-body");
    snakeElement.style.left = `${moveValueLeft.toString()+"px"}`

}

let c = 300

async function autoMoveUp() {
    while ( c > -20 ) {
        var snakeElement = window.document.getElementById("snake-body");
        snakeElement.style.top = `${c+"px"}`
        await sleep(1000)
        c-=20
    }
    if ( c == -20 ) {
        window.alert(`GAME OVER`)
    }     
    }

// ----------------------------------------------- //

// Quando a tecla W é pressionada, executa 2 funções, de calcular a quantidade do movimento e de mover com base na quantidade do movimento.
document.addEventListener('keydown', (w) => {
    if (w.key && w.key.toLowerCase() === 'w') {
      calcMoveQuantityNegativeVertical()
      moveUp()
      autoMoveUp()
    }
})

// Quando a tecla S é pressionada, executa 2 funções, de calcular a quantidade do movimento de manteira positiva e mover com base na quantidade
document.addEventListener('keydown', (s) => {
    if (s.key && s.key.toLowerCase() === 's') {
        calcMoveQuantityPositiveVertical()
        moveDown()
    }
})

document.addEventListener('keydown', (d) => {
    if (d.key && d.key.toLowerCase() === 'd') {
        calcMoveQuantityPositiveHorizontal()
        moveRight()
    }
})

document.addEventListener('keydown', (a) => {
    if (a.key && a.key.toLowerCase() === "a") {
        calcMoveQuantityNegativeHorizontal()
        moveLeft()
    }
})


// ----------------------------------------------- //

