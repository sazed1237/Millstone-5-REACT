
const addItemToLocasStorage = () => {
    const inputId = document.getElementById('storage-id')
    const id = inputId.value 
    const inputValue = document.getElementById('storage-value')
    const value = inputValue.value 
    

    if(id && value){
        localStorage.setItem(id, value);
    }

    inputId.value = ''
    inputValue.value= ''
}


const addArray = () =>{
    const numbers = [21, 45, 66, 77, 84, 61, 23]
    number = JSON.stringify(numbers)
    localStorage.setItem('arryOfNumbers', number)
}

const addObject = () => {
    const items = {id: 1, name: 'Table', price: 4000 }

    stoageItem = JSON.stringify(items)
    localStorage.setItem('itemsOfObject', stoageItem)
}