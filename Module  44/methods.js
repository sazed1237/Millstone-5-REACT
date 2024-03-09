const products =[
    {name: 'laptop', brand: 'lanovo', price: 32000, color: 'Silver'},
    {name: 'Phone', brand: 'Xoami', price: 20000, color: 'Black'},
    {name: 'watch', brand: 'ROSRA', price: 1000, color: 'Golden'},
    {name: 'Headphone', brand: 'H', price: 500, color: 'gray'}
]

// map return array
const brand = products.map(product => product.brand)
// console.log(brand)

products.forEach(product => console.log(product.price));

products.forEach(product => {
    // console.log(product.color)
})


const cheap = products.filter(product => product.price < 2000);
// console.log(cheap)


const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName)


const specific = products.find(product => product.name.includes('n'));
console.log(specific)
