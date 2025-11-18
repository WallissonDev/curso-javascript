function tabuada() {
    let num = document.getElementById("txtnum")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
         window.alert("Por favor, digite um número")
    } else { 
        // Vou usar o while, apenas para praticar, usaria "for" geralmente. 
        let trueNumber = Number(num.value)
        let c = 1
        // Guanabara utilizou um "limpar" mais simples, optei por um que desafiou mais meus conhecimentos

        // Lendo a documentação, aprendi como acessar os "childs" dos elementos pai, dessa forma fui removendo por vez. Provavelmente esse processo utiliza mais da memória, porém é algo que faz mais sentido ao meu ver, do que apenas fazer da forma como foi feito -> tab.innerHTML = '' 
        
        while (tab.firstChild) {
            tab.removeChild(tab.firstChild)
        }
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${trueNumber} x ${c} = ${trueNumber*c}`
            tab.appendChild(item)
            item.setAttribute("value", `${"num"+c}`)
            c++
        } element
    }   
}