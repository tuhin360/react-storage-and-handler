const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const subtract = (first, second) =>{
    return first - second;
}

// const numbers = [20, 24, 250, 400, 52, 90];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)


// const items = [
//     {id: 1, name: 'Perfume', price: 300},
//     {id: 2, name: 'Perfume', price: 300},
//     {id: 3, name: 'Perfume', price: 300},
//     {id: 4, name: 'Perfume', price: 300},
//     {id: 5, name: 'Perfume', price: 300}
// ]

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce( itemSumReducer, 0)



const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}



export {add, 
        multiply, 
        subtract, 
        getTotalPrice as getTotal};