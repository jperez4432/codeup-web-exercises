// I tried multiple variants
//var allCones = Math.floor(Math.random() * 50) + 50;

// Math.floor(Math.random() * 5) + 1;
/*
var number = Math.floor(Math.random() * 6) + 1;
var guess;

do {
    guess = parseInt(prompt("Enter a number betweeen 1 and 6"));
} while (guess !== number);
alert("Your guess of " + guess + " matches the number " + number + "!");\

 */

var allCones = Math.floor(Math.random() * 50) + 50;

//var conesSold = Math.floor(Math.random() * 5) + 1;

// var conesLeft = allCones - conesSold

/*
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - conesSold;
    console.log("I sold " + conesSold);
    console.log('I have ' + allCones + " i still have to sell " + allCones + ".");
} while (allCones >= 0)
console.log("Yay! i can go home");
*/
/*
var allCones = Math.floor(Math.random() * 50) + 50
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(conesBought + " cones sold");
    allCones = allCones - conesSold
    if (allCones =< conesSold) {
        allCones = allCones - conesSold;
        console.log("I sold " + conesSold + ".");
        console.log("I only have " + allCones + " left.");
        conesSold = console.log("You purchased " + conesSold + " and i have " + allCones + "!");
    } else if (allCones <= conesSold) {
        console.log("I only have " + allCones + ".")
    } else {
    }
    while (allCones = 0) ;
}
*/

//    allCones = allCones - conesSold;


/*
if (conesSold >= conesLeft) {
    alert("I can sell you the " + conesSold);
} else {
    alert("I cannot sell you anymore cones! I can go home now");
}
*/



do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
    } else {
        allCones = allCones - conesBought;
        console.log("The customer bought " + conesBought + " cones. Now I have " + allCones + " left to sell");
    }
} while (allCones > 0);
    console.log("Yay! I can go home now!");