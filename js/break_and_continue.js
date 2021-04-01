// var input = 0
// while (input %2 !== 1 || input < 1 || > 50) {
//    input = prompt("Enter an odd number between 1 & 50");
//     if (input % 2 ===1){break;}
//      (console.log("This is not a odd number"))
// }

var oddNumber = parseInt(prompt("Give me an odd number between 1 & 50."));

function isNumberEven(num) {
    // return num % 2 === 0; same as below
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isNumberInRange(num) {
    return num >= 1 && num <= 50;
}
while(true) {
    if (!isNumberEven(oddNumber)&& isNumberInRange(oddNumber)) {
        break;
    }
    oddNumber = parseInt(prompt("Give me an odd number between 1 & 50."));
}

for (var i = 1; i < 50; i+=2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}