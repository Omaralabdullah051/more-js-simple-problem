// find out a cheapest property value from an array of objects 

// array of objects 
const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'xiomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 16000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 13000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        // compare price only 
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
console.log((cheapestPhone(phones)));

// for loop and modern for of loop comparison 
// for loop 
for (let i = 0; i < phones.length; i++) {
    const element = phones[i];
}
// modern es6 for of loop 
for (const element of phones) {
}