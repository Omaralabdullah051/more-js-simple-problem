// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('foobar');
//     }
//     else if (i % 3 == 0) {
//         console.log('foo');
//     }
//     else if (i % 5 == 0) {
//         console.log('bar');
//     }
//     else {
//         console.log(i);
//     }
// }

// write 1 to 50 and write foo if divisible by 3,bar if divisible by 5,foobar if divisible by both 

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
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