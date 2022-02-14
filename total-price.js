// calculate the total property value in an array of objects 

// array of objects 
const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];
let totalPrice = 0;
for (const product of products) {
    totalPrice += product.price;
}
// console.log(totalPrice);

// calculate the total property value with quantity in an array of objects 

// array of objects 
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 3 }
];
let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal += productTotal;
}
// console.log(cartTotal);

const cart1 = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 3 }
];
function totalPriceOfCart(cart) {
    let cartTotal = 0;
    for (const product of cart) {
        const productTotal = product.price * product.quantity;
        cartTotal += productTotal;
    }
    return cartTotal;
}
console.log((totalPriceOfCart(cart1)));


