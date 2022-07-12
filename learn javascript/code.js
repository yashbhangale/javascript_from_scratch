console.log('hello');
// alert('hello this is Qazi');
// How to write a comment inline
// Variables
var b='smoothie';
console.log(b);
var someNumber=45;
console.log(someNumber);
// var age=prompt('What is your age?');
// document.getElementById('someText').innerHTML=age;


// Numbers in Javascript
var num1=10;
// Increment num1 by1
num1 ++;
// Decrement num1 by1
num1--;
console.log(num1);
// Divide,multiply*,remainder%
console.log(num1%6);
// Increment/decrement by any number you want
num1+=10;
console.log(num1);  

/*Functions
    1. create a function
    2. call a function
*/

// create
function fun() {
    console.log('this is function');
}

// call
fun();

/* Lets create a function that take in a nu=ame and says
hello followed by your name 
for eg. 

Name : "yash"
return: "hello yash"

*/

function greeting(){
    var name = prompt ('What is your name?');

    
    var result = 'hello ' + name;
    console.log(result);
}

//greeting();

//How do arguments work in functions?
// how do we add two numbers in function?

function sumNumbers(num1,num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10 , 10);

// While loop
/* var num = 0;

while(num < 100) {
    num +=1;
    console.log(num);
} */

//for loop
/*
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
*/

// Data types in Javascript
let yourAge = 18; // number
let yourName = 'bob'; //string
let name = {first:'yashu',last:'bhangale'}; //object
let truth = false; //boolean
let groceries = ['apple','banana','orange']; //array
let random; //undefined
let nothing = null; //value null

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


// array in javascript 
let fruits = ['banana','apple','orange'];
 fruits = new Array ('banana','apple','orange');

console.log(fruits[2]); // access value at index 2nd
fruits [0] = 'kiwi'; //replace value at index 0
console.log(fruits);

for(let i =0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}


// Array common methods
console.log('to sting', fruits.toString()); //convert array to string
console.log(fruits.join('-')); //convert array to string with -
console.log(fruits.join('*')); //convert array to string with *
console.log(fruits.pop(), fruits); //remove last element and return it
console.log(fruits.push('blackberries'), fruits);// append element to end of array and return new length
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits)
fruits.shift(); //remove first element
console.log(fruits);
fruits.unshift('pineapple'); //add element to start of array
console.log(fruits);

let vegetables = ['carrot','tomato','cucumber'];
let allGroceries = fruits.concat(vegetables); //concatenate two arrays
console.log(allGroceries);

console.log(allGroceries.slice(1,4)); //slice from 1 to 4
console.log(allGroceries.reverse()); //reverse array


let someNumbers = [111,23,4,2,1,3];
console.log(someNumbers.sort(function(a,b){return a-b})); //sort array acending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sort array decending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}  
console.log(emptyArray); 


// object in javascript
// dictionary in python

let student = {first:'yash',
    last:'bhangale' ,
    age:19,
    height:125,
    studentInfo:function(){
        return this.first + '\n' + this.last + ' is ' + this.age + ' years old and is ' + this.height + ' cm tall';
    }

}; 
console.log(student.first);
console.log(student.last);
student.first = 'notyash'; //change value of first
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());




//conditionals , control flows (if else) 
// && AND
// || OR

/*
var age = prompt('What is your age?');
if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not target demo';
    console.log(status);
}
*/


//switch statements
// differentiate between weekdays and weekends
// day 0 --> sunday --> weekend
// day 1 --> monday --> weekday
// day 2 --> tuesday    --> weekday
// day 5 --> friday --> weekend
// day 3 --> wednesday  --> weekday
// day 4 --> thursday   --> weekday
// day 6 --> saturday   --> weekend
// day 4 --> thursday --> weekday
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
 }
 console.log(text);





 