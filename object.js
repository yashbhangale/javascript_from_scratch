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

