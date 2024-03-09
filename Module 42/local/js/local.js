
const addItemInLocal = () => {
    const set = localStorage.setItem('name', 'Jamila Sundory')
    console.log(set)
}

const removeItemInLocal = () => {
    localStorage.removeItem('name')
}

const getItemInLocal = () => {
    const age = localStorage.getItem('age')
    console.log(age)
}