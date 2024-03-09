// browser using cookie

document.cookie.split('; ').map(c => {
    const parts = c.split('=')
    console.log(`naem:${parts[0]} value:${parts[1]}`)
})
