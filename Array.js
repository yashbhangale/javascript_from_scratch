/ array in javascript 
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
