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



const users = [
   {
      id: 1,
      name: 'ryan',
      email: 'ryan@codeup.com',
      languages: ['clojure', 'javascript'],
      yearsOfExperience: 5
   },
   {
      id: 2,
      name: 'luis',
      email: 'luis@codeup.com',
      languages: ['java', 'scala', 'php'],
      yearsOfExperience: 6
   },
   {
      id: 3,
      name: 'zach',
      email: 'zach@codeup.com',
      languages: ['javascript', 'bash'],
      yearsOfExperience: 7
   },
   {
      id: 4,
      name: 'fernando',
      email: 'fernando@codeup.com',
      languages: ['java', 'php', 'sql'],
      yearsOfExperience: 8
   },
   {
      id: 5,
      name: 'justin',
      email: 'justin@codeup.com',
      languages: ['html', 'css', 'javascript', 'php'],
      yearsOfExperience: 9
   }
];

// es5
//
// let emails =  users.map(function(user){
//    user = user.email;
//    return user;
// });
// console.log(emails);
//
// // ES6
// let es6Emails = users.map(user => user.email);
// console.log(es6Emails);
//
// let minOf3 = users.filter(function (user){
//    return user.languages.length >= 3;
// });
// console.log(minOf3);
//
//
// const languages = users.filter(function (){
//    return users.languages;
// });
// console.log(languages)
//
//
// const emails = users.map(function (x){
//   return users.email
// });
// console.log(emails);
//

// my attempt
// let experience = users.reduce(function (accumulator, user){
//   accumulator.push(user.email);
//   return accumulator;
// }, []);
// console.log(experience);


//correct answer
// let totalYears = users.reduce(function (total, user){
//    let yearsOfExperience = user.yearsOfExperience;
//    return total + yearsOfExperience;
// }, 0);
// console.log(totalYears);

//es6
// totalYears = users.reduce((total, user)=> total + user.yearsOfExperience, 0);
// console.log(totalYears)
//

// my attempt

// let longestEmail =users.reduce(function (accumulator, user, index, usersArray){
//    if (index ===  usersArray.length - 1) {
//       accumulator.push(user.email);
//       accumulator.sort(function (b, a){return b-a});
//       return accumulator[0];
//    } else {
//       accumulator.push(user.email);
//       return accumulator;
//    }
// }, []);
// console.log("The longest email address is " + longestEmail);
//
// let longestEmail = users.reduce(function (accumlator, user,index, usersArray){
//    if (index === usersArray.length - 1){
//       accumlator.push(user.email);
//       accumlator.sort(function (email1, email2){
//          return email2.length - email1.length;
//       });
//       return accumlator[0];
//    }   else {
//       accumulator.push(user.email);
//       return  accumlator;
//    }
// }, []);

// let longestUserEmail = users.reduce((a, b) => {
//    return a.length > b.email.length ? a : b.email;
// });
// console.log(longestUserEmail);

// let longestUserEmail = users.reduce((a, b) => {
//    return a.length > b.email.length ? a : b.email;
// });
//
// let longestUserEmail = email.reduce((a, b) => a.length > b.length ? a : b);

let names = users.reduce(function(accumulator, user){
   accumulator.push(user.name);
   return accumulator;
}, []);

let usersNames = users.reduce((accumulator, user, index, arr) => {
   if (index === arr.length -1) {
      accumulator += `${user.name}.`;
   } else {
      accumulator += `${user.name}, `;
   }
   return accumulator;
},'Users names are: ');

console.log(usersNames);
console.log(names.join(', '));



let uniqueArray = users.reduce(function (nameArray, user, index, array) {
   nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
   // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
   // nameArray = [...nameArray,...user.languages];
   // console.log(nameArray);
   if (index === array.length - 1) {
      // return getUniqueValues(nameArray);
      return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
   } else {
      return nameArray;
      // return getUniqueValues(nameArray);
   }
}, []);
console.log(uniqueArray);