// --------Old way to import and export

//     function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }


// module.exports = { add, sub }


// --------New way to export

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


export {add, sub}