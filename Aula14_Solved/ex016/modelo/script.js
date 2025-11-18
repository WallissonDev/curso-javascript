function contar(){
    let inicio = document.getElementById("txti") 
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam Dados!")
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( i < f ) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        } else { 
            // Contagem Decrescente
            for ( let c = i; c >= f ; c -= p) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}