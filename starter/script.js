// // Let and const

// // ES5

// var name5 = 'Akalanka Nayanajith';
// var age5 = 22;
// name5 = 'Nayanajith Akalnaka Gajasinghe';

// console.log(name5);

// // ES6
// const name6 = 'Akalanka Nayanajith'; // we cannot change 
// let age6 = 22;


// // ES5

// function driversLicence(passedTest){
//     //function scope-------
//     if(passedTest){
//         var firstName = 'Jhone';
//         var yearOfBirth = 1990;

        
//     }

//     console.log(firstName +'born in '+ yearOfBirth);
// }

// console.log(true);

// // ES6

// function driversLicence(passedTest){
//     //Block scope----------
//     if(passedTest){
//         let firstName = 'Jhone';
//         const yearOfBirth = 1990;
//         console.log(firstName +'born in '+ yearOfBirth); 
        
//     }

//     //console.log(firstName +'born in '+ yearOfBirth); - // will error
// }

// console.log(true);


// /////////////////////////////////////////////////////////////////////////////
// /// Blocks and IIFEs

// //block
// {
//     const a=1;
//     let b = 2;

// }

// //console.log(a+b); //error

// /////////////////////////////////
// // Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }


// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(` 
// This is ${firstName} ${lastName}. 
// He was born in ${yearOfBirth}. 
// Today, he is ${calcAge(yearOfBirth)} years old. 
// `);

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));


// /////////////////////////////////
// // Lecture: Arrow functions


// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);


// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);



// // ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
       
//        var self = this; 
//        document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// //box5.clickMe();


// // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// //box6.clickMe();


// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// //box66.clickMe();




// //function constuctor 

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function(friends) {
    
//     var arr = friends.map(function(el) {
//        return this.name + ' is friends with ' + el; 
//     }.bind(this));
    
//     //with out bind output = [" is friends with Bob", " is friends with Jane", " is friends with Mark"]
//     //thus, we need to bind this
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// //ES6

// Person.prototype.myFriends6 = function(friends) {
    
//     // var arr = friends.map () =>{

//     // }
//     let arr = friends.map( el =>{
//         return `${this.name} is friends with ${el}`; 
//     });
//     //with out bind output = [" is friends with Bob", " is friends with Jane", " is friends with Mark"]
//     //thus, we need to bind this
//     console.log(arr);
// }

// var friends = ['Bob6', 'Jane6', 'Mark6'];
// new Person('John6').myFriends6(friends);


// // -- Distructuring 


// //ES5

// var arr = ['akalanka' , 26]
// var name5 = arr[0];
// var age5 = arr[1];

// //ES6

// const [name6_ , year6_] = ['akalank' , 26]//save in keys 

// console.log(name6_);
// console.log(year6_);

// //we can this to the obj

// const obj = {
//     f_name : 'Saman',
//     l_name : 'kumar'
// };

// const {f_name , l_name } = obj;

// console.log(f_name);
// console.log(l_name);


// const {f_name : a , l_name : b} = obj;
// console.log(a);
// console.log(b);


// /////////////////////////////////
// // Lecture: Arrays


// const boxes = document.querySelectorAll('.box');

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });


// //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// //ES5
// for(var i = 0; i < boxesArr5.length; i++) {
    
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
    
//     boxesArr5[i].textContent = 'I changed to blue!';
    
// }


// //ES6
// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }




// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);


// //ES6

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


// /////////////////////////////////
// // Lecture: Spread operator (...<arr>/<nodelist>)

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5

// var ages = [18, 30, 12, 21];
// /* this method .apply is used to pass array of arguments to the function */
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6
// /* ... this operatoer Spread the array 
//     if array get bigger than the no of arguments -- not matter 
// */
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// /* node list to array  = Array.from(<nodeList>) */ 
// Array.from(all).forEach(cur => cur.style.color = 'red');


/////////////////////////////////
// Lecture: Rest parameters

// function isFullAge5() {
//     //argument  == this
//     //console.log(arguments);

//     //obj to array conversion  (get copy )
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur) {
//         //console.log((2016 - cur) >= 18);
//     })
// }

// function isFullAge5(limit) {
//     //argument  == this
//     //console.log(arguments);

//     //obj to array conversion  (get copy )
//     var argsArr = Array.prototype.slice.call(arguments,1);//coppy starting possion no 1

//     //console.log(argsArr);

//     argsArr.forEach(function(cur) {
//         //console.log((2016 - cur) >= limit);
//     })
// }

// isFullAge5(18,1990,1999,1965);


// //ES6
// function isFullAge6(limit,...years) {
//     years.forEach(cur => console.log( (2016 - cur) >= limit));
// }

//isFullAge6(18,1990,1999,1965);



/////////////////////////////////
// Lecture: Default parameters

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson6('John', 1990);
var emily = new SmithPerson6('Emily', 1983, 'Diaz', 'spanish');

/////////////////////////////////
// Lecture: Maps (Data Structure )
/*

The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

*/

const question = new Map();
question.set('question','waht is your first name ? ');
question.set(1,'Akalanka Nayanajith');
question.set(2,'Nayanajith Gajasinghe');
question.set(3,'Saman Kuamara');
question.set('correct',1);
question.set(true , 'correct ans');
question.set(false , 'Warong please look check your ID');

/*
    this is a question map : 
    how this look like 
    Map(7) {"question" => "waht is your first name ? ", 1 => "Akalanka Nayanajith", 2 => "Nayanajith Gajasinghe", 3 => "Saman Kuamara", "correct" => 1, …}
    [[Entries]]
    0: {"question" => "waht is your first name ? "}
    1: {1 => "Akalanka Nayanajith"}
    2: {2 => "Nayanajith Gajasinghe"}
    3: {3 => "Saman Kuamara"}
    4: {"correct" => 1}
    5: {true => "correct ans"}
    6: {false => "Warong please look check your ID"}
    size: (...)__proto__: Map


*/

console.log(question.get('question'));
console.log(question.size);

if(question.has(3)) {
    question.delete(3);
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

//distructuring 
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));