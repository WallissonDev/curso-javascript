
const numberGroup = []

function addNumber() {
    let inputAcess = window.document.getElementById("valornum")
    let inputNumber = Number(inputAcess.value)
    let selectAcess = window.document.getElementById("selectId")
    let itemSelect = document.createElement("option")
    if (inputNumber > 0 && inputNumber < 101) {
        itemSelect.text = "Valor" + ` ${inputNumber}` + " adicionado."
        selectAcess.appendChild(itemSelect)
        numberGroup.push(inputNumber)
    } else {
        window.alert("Valor inválido!")
    }
} 


function numberAction() {
    
    let mainBoxAcess = window.document.getElementById("caixa-principal")
    
    let textCreateLength = document.createElement("p")
    textCreateLength.innerHTML = "Ao todo temos: " + numberGroup.length + " Números Cadastrados "
    
    let textCreateSum = document.createElement("p")
    let allSum = 0
    for ( let item of numberGroup) {
        allSum += item
    }
    textCreateSum.innerText = "Somando todos os valores temos: " + allSum
    
    let maxNumber = Math.max(...numberGroup)
    let textCreateMax = document.createElement("p")
    textCreateMax.innerHTML = "O maior número da lista é: " + maxNumber

    let minNumber = Math.min(...numberGroup)
    let textCreateMin = document.createElement("p")
    textCreateMin.innerHTML = "O menor número da lista é: " + minNumber

    let averageNumber = allSum / numberGroup.length
    let textCreateAverage = document.createElement("p")
    textCreateAverage.innerHTML = "A média dos números é de: " + averageNumber

    mainBoxAcess.appendChild(textCreateLength)
    mainBoxAcess.appendChild(textCreateMax)
    mainBoxAcess.appendChild(textCreateMin)
    mainBoxAcess.appendChild(textCreateAverage)
    mainBoxAcess.appendChild(textCreateSum)
}