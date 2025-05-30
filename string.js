
var str = 'string';
console.log(str.charAt(999)); // ''
var str = 'string';
console.log(str.charAt(0)); // s
//If no character is found, the method returns an empty string.

var word = "Ocygen";
var newName = word.replace('c', 'x');
console.log(newName);

var originalString = "Hello, World!";
var slicedString = originalString.slice(7, 12);

console.log(slicedString); // World

let originalString = "Hello, World!";
let slicedString = originalString.slice(7);

console.log(slicedString); // World!


let originalString = "Hello, World!";
let slicedString = originalString.slice(-6, -1);

console.log(slicedString); // World


var myNumbers = [10, 20, 30, 40, 50,60];
console.log(myNumbers.length); 
