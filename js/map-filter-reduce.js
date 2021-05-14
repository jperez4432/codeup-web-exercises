// let prices = [21.00, 29.99, 23.99, 9.99, 4.99, 1.99, 2.99];
//
// let output = "";
// prices.forEach(function (item, index){
//     output = output + "<p>" + item + " is at index " + index + "</p>";
//     $("#output").html(output);
// });


// ES5 way

// prices.forEach(function (item, index){
//    let tax = (item * 0.0825).toFixed(2);
//    let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//    output = output + "<p>item number " + (index + 1) + ". Price: $" + item + ". Tax: $" + tax + ". Total: $" +  total + "</p>";
//    $("#output").html(output);
// });

// ES6 Way
// prices.forEach( (item, index) => {
//    let tax = (item * 0.0825).toFixed(2);
//    let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//    output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
//    $('#output').html(output);
// });

// let output = "";
// let prices = [21.00, 29.99, 23.99, 9.99, 4.99, 1.99, 2.99];
// let pricesAfterTax = [];
//
// pricesAfterTax = prices.map(function (price){
//    let tax = (price * 0.0825).toFixed(2);
//    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//    return parseFloat(total);
// });
// console.log(pricesAfterTax);
//
// pricesAfterTax.forEach(function (item){
//    output = output + "<p>" + item + "</p>";
//    $("#output").html(output);
// });
//


// ES6 version
// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map(function (thing, index){
//    thing = thing + 's';
//    if (index === 0) {
//       output = "<p>You must bring the following items:</p>";
//    }
//    output += `<p>${thing}</p>`
//    $("#output").html(output);
// });
//



// pluralThings.forEach(function (thing, index){
//    if (index === 0) {
//       output = "<p>You must bring the following items:</p>";
//       output = output + "<p>" + thing + "</p>";
//    }
//    output = output + "<p>" + thing + "</p>";
//    $("#output").html(output);
// });



