function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function demo () {
    let i = 0
    while ( i < 5 ) {
        console.log(`Esperando ${i}`)
        i++ 
        await sleep(i*1000)
    }
}

demo()