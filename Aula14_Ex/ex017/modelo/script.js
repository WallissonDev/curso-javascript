const { createElement } = require("react")

function gerarTabuada() {
    var numeroTabuada = window.document.getElementById("valor")
    var listaNumero = window.document.getElementById("lista")
    var numeroFinal = Number(numeroTabuada.value)

    if (numeroTabuada.validity.valueMissing){
        window.alert("Valor Inválido!")
    } else {
        while (listaNumero.firstChild){
            listaNumero.removeChild(listaNumero.firstChild)
        }
        var contador = 1
        while ( contador < 10 ){
            var matriz = document.createElement("option")
            matriz.innerText = `${numeroFinal}x${contador} = ${numeroFinal*contador}`
            listaNumero.appendChild(matriz)
            contador += 1
        }
    }
}