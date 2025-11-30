function parimpar(num) {
    if ( num % 2 == 0 ) {
        return "par"
    } else {
        return "impar"
    }
}

let numero = parimpar(10)
console.log(numero)

function somar(n1 = 0, n2 = 0){
    return n1+n2
}

console.log(somar(5,10))

function calculoFatorial(num) {
    let multiply = 0
    let factorial = `${num+"! = " }`
    let calc = 1
    for ( multiply; num != 0; num--) {
        calc *= num
        factorial += num.toString()
        if ( num != 1) {
            factorial += " x "
        }
    }
    factorial += " = " + calc
    return factorial
}

console.log(calculoFatorial(5))

function fatorial(n) {
    if ( n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))