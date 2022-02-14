const greetings = 'Hello, how are you?'

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
console.log((reverseString(greetings)));


function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
console.log((reverseString(['hello, my name is abul'])));
