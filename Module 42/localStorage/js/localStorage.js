
const addProduct = () => {
    const productName = document.getElementById('product-name')
    const productQuantity = document.getElementById('product-quantity')
    const product = productName.value 
    const quantity = productQuantity.value

    console.log(product, quantity)
    displayProduct(product, quantity)
    savedCartItemInLocalStorage(product, quantity)
}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}
    
    `
    productContainer.appendChild(li)
}


const getStoredItemLocalStorage = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart ;
}

const savedCartItemInLocalStorage = (product, quantity) =>{
    const cart = getStoredItemLocalStorage()
    cart[product] = quantity
    cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)

    // console.log(cart, cartStringified)
}


const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredItemLocalStorage()
    console.log(savedCart)
    
    for(const product in savedCart){
        const quantity = savedCart[product]
        
        displayProduct(product, quantity)
        console.log(product, quantity)
    }
    
}

displayProductFromLocalStorage()