console.log(1)
console.log(2)
console.log(3)
setTimeout(()=>{
    console.log('lazy exicute')
}, 4000)
console.log(5)
console.log(6)

function doSomething(){
    console.log(4)
}