
const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value 
    const quantity = quantityField.value 

    // console.log(product, quantity)
    displayProduct(product, quantity)
    savedCartItemInLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) =>{
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} ${quantity}
    `
    productContainer.appendChild(li)
}


const getStoredItemLocalStorage = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart')
    
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart

}


const savedCartItemInLocalStorage = (product, quantity) =>{
    const cart = getStoredItemLocalStorage()
    cart[product] = quantity;
    cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
    console.log(cartStringified)
}


const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredItemLocalStorage();
    console.log(savedCart)

    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayProductFromLocalStorage()