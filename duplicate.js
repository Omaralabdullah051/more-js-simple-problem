const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];
//  using for of loop 
function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    // const element = names[i];
    // console.log(element);
    // }
    for (const element of names) {
        // console.log(element);
        if ((unique.indexOf(element)) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
console.log((removeDuplicate(names)));

function removeDuplicate(numbers) {
    let unique = [];
    for (const element of numbers) {
        if ((unique.indexOf(element)) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
console.log((removeDuplicate([1, 3, 100, 400, -2, -2, -3, 100, 500, 3, 1, 2])));