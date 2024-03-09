
const alertFunction = () => {
    alert('Valobasa dibi kina bol????')
}

const confirmFunction = () => {
    const fedback = confirm('Valobasa dibi kina bol????')
    console.log(fedback)

    if(fedback === true){
        alert('tmi amar moyna pakhi....')
    }
    else{
        console.log('DGM...... ')
    }
}


const pormptFunction = () => {
    const result = prompt('tmr nam ki ???')
    console.log(result)

    if(result === null){
        alert('nam na bolle DGM.....')
    }
    else{
        console.log('Welcome to our Kingdom', result)
        alert('Welcome to our Kingdom: ' + result)
    }
}