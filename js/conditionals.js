"use strict";
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
*/

function analyzeColor(color) {
    if (color === 'blue') {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "Strawberries are red";
    } else {
        return "i dont know anything about" + color;
    }
}
console.log(analyzeColor("red"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
*/

// console.log(analyzeColor(randomColor));

 /**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var colors = colors[Math.floor(Math.random() * colors.length)];

//console.log(colors);
function analyzeColor(color) {
switch (color) {
    case 'red':
        return color + "Strawberries are red";
        break;

    case 'blue':
        return color + " is the color of the sky";
        break;
    default:
        return "I dont know anything about " + color;
}}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("Whats your favorite color?").toLowerCase();
alert(analyzeColor(color));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var totalAmount = 100
var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal() {



    if (luckyNumber === 0) {
        return (0);
    } else if (luckyNumber === 1) {
        return (totalAmount * .90);
    } else if (luckyNumber === 2) {
        return (totalAmount * .75);
    } else if (luckyNumber === 3) {
        return (totalAmount * .65);
    } else if (luckyNumber === 4) {
        return(totalAmount * .50);
    } else if (luckyNumber === 5) {
        return (totalAmount);
    } else {
        return ("Invalid input");
    }}
    console.log(calculateTotal());

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);

var billTotal = prompt("What is your total bill?");
//alert("You're lucky number was" + luckyNumber());
alert("Youre price before discount was $" + billTotal);
alert("Youre lucky number is " + luckyNumber );
alert("Your discount is $" + calculateTotal(luckyNumber));
alert("Youre new price is $" + (totalAmount - calculateTotal()));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var number = confirm("Would you like to add a number?")
var selectedYes = (prompt("Please enter a number"));
var evenOrOdd = (selectedYes % 2  == 0) ? " Your number is even" : "Your number is odd";
var plus100 = parseInt(selectedYes) + 100;
var PosOrNeg = (selectedYes <0 ) ? "The number is negative" : "The number is positive";

if (isNaN(selectedYes)) {
   (alert("This is not a number"));
}
alert("Youre number + 100 is " + plus100);
alert(PosOrNeg);
alert(evenOrOdd);

var participate = confirm("would you like to enter a number?");

if (participate) {
    var userNumber = parseFloat(prompt("Please enter a number"));
    if (isNaN(userNumber)) {
        alert(userNumber + "is not a number sorry");
    } else {
        if (userNumber % 2 === 0) {
            alert("Your number is even")
        } else {
            alert("Your number is odd")
        }
        if (userNumber > 0 ) {
            alert("Youre number is a positive one")
        } else {
            alert("Your number is negative")
        }
        alert(userNumber + 100 + " is your number + 100");
    }
} else {
    alert("thats fine i guess...");
}


/*
var numberEntry;

  function  isOddorEven(numberEntry) {
      return (numberEntry % 2 === 0 ) ? "this number is even" : "this number is odd";
  }
  function isnegativeorpositive(numberEntry) {
      return (numberEntry) {
          return (numberEntry > 0 ) ? "this number is positive" : "this number is negative;"
      }
      function  plus100 (numberEntry) {
          return "your number is " + numberEntry + 100 + " if we added 100";
      }
      if (participate) {
          numberEntry = prompt("Please enter a number".)
      }
  }


 */