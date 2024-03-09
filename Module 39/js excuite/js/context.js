// global variable
const a = 5;

function add(num1, num2){
    // inside or function variable
    const result = num1 + num2 + a
    return result
}


const sum = add(5, 5)
console.log(sum)