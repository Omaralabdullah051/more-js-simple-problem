// remove duplicate items from an array 
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'babul', 'fabul', 'gabul', 'cabul', 'habul', 'dabul'];
function removeDuplicate(names) {
    let unique = [];
    // using for of loop 
    for (const element of names) {
        if ((unique.indexOf(element)) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
console.log((removeDuplicate(names)));



// we can see string's indexof ,length and elemnent 
const string = 'how are you';
// also counting charactar and space 
console.log(string.indexOf('a'));
console.log(string.length);
console.log(string[5]);
// but string is immutable 

// incorrect 
string[5] = 't';
console.log(string); /* because string is immutable,we can't change the element */

// reverse a string 
function reverseString(text) {
    let myString = '';
    for (const element of text) {
        myString = element + myString;
    }
    return myString;
}
console.log((reverseString(string)));

// write 1 to 50 numbers , in these numbers,write foo,bar,foobar if number is divisible by 3 or 5 or both 
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foober');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}

// find out the cheapest property value from an array of objects 
const phones = [
    { name: 'samsung', storage: 32, camera: 16, price: 18000 },
    { name: 'oppo', storage: 32, camera: 16, price: 33000 },
    { name: 'huawei', storage: 32, camera: 16, price: 20000 },
    { name: 'nokia', storage: 32, camera: 16, price: 12000 },
    { name: 'iphone', storage: 32, camera: 16, price: 77000 },
    { name: 'microsoft', storage: 32, camera: 16, price: 15000 }

];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (const element of phones) {
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}
console.log((cheapestPhone(phones)));

// find out the highest property value from an array of objects 

const mobilePhones = [
    { name: 'samsung', storage: 32, camera: 16, price: 18000 },
    { name: 'oppo', storage: 32, camera: 16, price: 33000 },
    { name: 'huawei', storage: 32, camera: 16, price: 20000 },
    { name: 'nokia', storage: 32, camera: 16, price: 12000 },
    { name: 'iphone', storage: 32, camera: 16, price: 77000 },
    { name: 'microsoft', storage: 32, camera: 16, price: 15000 }

];
function highestPhone(phones) {
    let highest = mobilePhones[0];
    for (const element of mobilePhones) {
        if (element.price > highest.price) {
            highest = element;
        }
    }
    return highest;
}
console.log((highestPhone(mobilePhones)));

// calculate the total property value with quantity in an array of objects

const cart = [
    { name: 'iphone', price: 150000, quantity: 1 },
    { name: 'myphone', price: 80000, quantity: 1 },
    { name: 'yourphone', price: 10000, quantity: 2 },
    { name: 'hisphone', price: 15000, quantity: 1 },
    { name: 'herphone', price: 1000, quantity: 5 },
    { name: 'karphone', price: 17000, quantity: 1 },
    { name: 'jarphone', price: 13000, quantity: 2 },
    { name: 'tarphone', price: 9000, quantity: 3 },
];
function totalPriceOfCart(cart) {
    let totalPrice = 0;
    for (const product of cart) {
        const productTotal = product.price * product.quantity;
        totalPrice = totalPrice + productTotal;
    }
    return totalPrice;
}
console.log((totalPriceOfCart(cart)));