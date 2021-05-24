var x = Math.floor((Math.random() * 1000) + 1);
function fizzbuzz (x) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log("FizzBuzz!");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    }
}

fizzbuzz(x);

// instructor answer
// (() => {
//     const fizzbuzz = numTil => {
//         for (x = 1; x <= numTil; x++) {
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz");
//             } else if (x % 3 === 0) {
//                 console.log("Fizz");
//             } else if (x % 5 === 0) {
//                 console.log("Buzz");
//             } else {
//                 console.log(x)
//             }
//         }
//     }
//     fizzbuzz(30)
// })();
