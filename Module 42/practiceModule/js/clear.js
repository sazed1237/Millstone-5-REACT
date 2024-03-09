

const clearAllFormLocal = () => {
    localStorage.clear()
}

const setDataInLocal = () => {
    localStorage.setItem('name', 'Sakib Khan')
    localStorage.setItem('age', '40')
}

const getDataToLocal = () => {
    const result = localStorage.getItem('name')
    console.log(result)
}

const removeDataToLocal = () => {
    localStorage.removeItem('age')
}

const setObjectDataToLocal = () =>{
    let obj = {firstName: 'Abrham', lastName: 'Linkon'}

    localStorage.setItem()
}