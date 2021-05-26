// var x = Math.floor((Math.random() * 1000) + 1);
// function fizzbuzz (x) {
//     if (x % 5 === 0 && x % 3 === 0) {
//         console.log("FizzBuzz!");
//     } else if (x % 5 === 0) {
//         console.log("Buzz");
//     } else if (x % 3 === 0) {
//         console.log("Fizz");
//     }
// }
//
// fizzbuzz(x);

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
// Tuesdays
// function return7 () {
//     console.log(7);
// }
// return7();


//correct answer
// const multiplyByFive = num => typeof num === "number" ? num * 5 : 0;
// console.log(multiplyByFive("FJFJF"))

// my attempt
// function multipliedBy5 (x){
//     if (x !== isNaN(x)) {
//     return x * 5
// } else {
//         return 0
//     }
// }
// console.log(multipliedBy5(f))