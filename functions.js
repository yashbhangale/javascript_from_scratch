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
