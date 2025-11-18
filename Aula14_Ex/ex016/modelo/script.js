    function contar(){
        var inicio = window.document.getElementById("inicio")
        var fim = window.document.getElementById("fim")
        var passo = window.document.getElementById("passo")
        var telaContar = window.document.getElementById("telaContagem")
        var contarInicio = Number(inicio.value)
        var contarFim = Number(fim.value)
        var contarPasso = Number(passo.value)
        if (inicio.validity.valueMissing){
            window.alert("Valor Inválido, no mínimo 0")
        } else { 
            telaContar.innerText = "Contando: "
            if (contarInicio < contarFim ) {
                if (contarPasso > 0){
                    for (contarInicio ;contarInicio < contarFim ; contarInicio +=contarPasso) {
                        telaContar.innerText += ` ${contarInicio}`
                    }
                    telaContar.innerText += ` ${contarFim}`
                } else if ( contarPasso <= 0 ) {
                    window.alert("0 ou abaixo é Inválido, definindo passo para = 1")
                    contarPasso = 1
                    for (contarInicio ;contarInicio < contarFim ; contarInicio +=contarPasso) {
                        telaContar.innerText += ` ${contarInicio}`
                    }
                    telaContar.innerText += ` ${contarFim}`
                }
            } else if ( contarInicio > contarFim ) {
                if (contarPasso > 0){
                    for (contarInicio ; contarInicio > contarFim ; contarInicio -= contarPasso) {
                        telaContar.innerText += ` ${contarInicio}`
                    }
                    telaContar.innerText += ` ${contarFim}`
                } else if (contarPasso <= 0) {
                        window.alert("Valor 0 ou negativo, passo definido para 1")
                        contarPasso = 1
                        for (contarInicio ; contarInicio > contarFim ; contarInicio -= contarPasso) {
                        telaContar.innerText += ` ${contarInicio}`
                    }
                    telaContar.innerText += ` ${contarFim}`
                }
            }
        }
    }