// string in javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple\norange';
console.log(moreFruits);  /* here \n is used to create a new line*/

console.log(fruit.length); //length of string
console.log(fruit.indexOf('a')); //index of a in banana
console.log(fruit.slice(2,6)); //slice from 2 to 6
console.log(fruit.replace('ban','123')); //replace ban with 123
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2)); //get the character at index 2 
console.log(fruit[2]); //get the character at index 2
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by character
