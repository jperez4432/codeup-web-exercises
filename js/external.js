"use strict";

console.log("Hello from external Javascript")

alert("Welcome to my Website!")
var favoritecolor = prompt("what is your favorite color?");
alert("Great! " + favoritecolor + " That is my favorite color too!");

var LM = prompt("How many days did you rent Little Mermaid?")
var BB = prompt("How many days did you rent Brother Bear?")
var Hercules = prompt ("How many days did you rent Hercules?")
var Total = (LM * 3) + (BB * 3 ) + ( Hercules * 3)
console.log(alert("Great! Your total is " + Total));

var Google = prompt("How many hours did you work at Google?")
var Amazon = prompt("How many hours did you work at Amazon?")
var Facebook = prompt("How many hours did you work at Facebook?")
var pay = (Google * 400 )  + ( Amazon * 380 ) + ( Facebook * 350 )
console.log(alert("Your total pay is $" + pay));

var classSize = confirm("Is the class full?")
if (classSize == true) {alert("You may not register for this class.")}
var schedule = confirm("Does this class conflict with your schedule?");
if (schedule == true) {alert("You may not register for this class")}
var canEnroll = classSize && schedule
if (canEnroll == true) {alert("You may not register for this class.")}
else{alert("Great! You may register for this class!")}

var expirationDate = confirm("Is the coupon expired?")
if (expirationDate == false) {alert("This offer is valid!")}
else  {alert("This offer is invalid")}

var premium = confirm("Are you a premium member?")
var itemspurchased = prompt("How many items did you purchase?")
if ((itemspurchased >= 2 || premium) && expirationDate == false) {alert("The offer is valid!")}
else {alert("The offer is invalid")}

