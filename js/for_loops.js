/* My answer
function showMultiplicationTable (num) {
    for (var x = 1; x <= 10; x++) {
        const result = x * (num);
        console.log(`${7} * ${x} = ${result}`);
}}
showMultiplicationTable(7);

// Javis answer
for(i = 0; i < 10; i++){
    var random = Math.floor(Math.random() * 181) + 20;
    if(random %2 ===0) {
    console.log(random + " Is even");
}   else {
    console.log(random + " is odd");
}}

*/
// My answer
/*
for (var i = 1; i <= 9; i++)
{
    for (var x = 0; x < i; x++) {
        var iString = i+"";
         while (i > iString.length) {
            iString = i + iString
        }
    } console.log(iString);
}
alt possibility but console log issues as it wouldnt display into string
 /*
var i, j;
for(i=1; i<=9; i++)
{
    for(j=1; j<=i; j++)
        console.log(i);}
*/



for (var i = 100; i >= 0; i -= 5) {console.log(i);}