// Let and const

// ES5

var name5 = 'Akalanka Nayanajith';
var age5 = 22;
name5 = 'Nayanajith Akalnaka Gajasinghe';

console.log(name5);

// ES6
const name6 = 'Akalanka Nayanajith'; // we cannot change 
let age6 = 22;


// ES5

function driversLicence(passedTest){
    //function scope-------
    if(passedTest){
        var firstName = 'Jhone';
        var yearOfBirth = 1990;

        
    }

    console.log(firstName +'born in '+ yearOfBirth);
}

console.log(true);

// ES6

function driversLicence(passedTest){
    //Block scope----------
    if(passedTest){
        let firstName = 'Jhone';
        const yearOfBirth = 1990;
        console.log(firstName +'born in '+ yearOfBirth); 
        
    }

    //console.log(firstName +'born in '+ yearOfBirth); - // will error
}

console.log(true);


/////////////////////////////////////////////////////////////////////////////
/// Blocks and IIFEs

//block
{
    const a=1;
    let b = 2;

}

//console.log(a+b); //error

/////////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(` 
This is ${firstName} ${lastName}. 
He was born in ${yearOfBirth}. 
Today, he is ${calcAge(yearOfBirth)} years old. 
`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));


/////////////////////////////////
// Lecture: Arrow functions


const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);



// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this; 
       document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box66.clickMe();




//function constuctor 

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    //with out bind output = [" is friends with Bob", " is friends with Jane", " is friends with Mark"]
    //thus, we need to bind this
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6

Person.prototype.myFriends6 = function(friends) {
    
    // var arr = friends.map () =>{

    // }
    let arr = friends.map( el =>{
        return `${this.name} is friends with ${el}`; 
    });
    //with out bind output = [" is friends with Bob", " is friends with Jane", " is friends with Mark"]
    //thus, we need to bind this
    console.log(arr);
}

var friends = ['Bob6', 'Jane6', 'Mark6'];
new Person('John6').myFriends6(friends);


// -- Distructuring 


//ES5

var arr = ['akalanka' , 26]
var name5 = arr[0];
var age5 = arr[1];

//ES6

const [name6_ , year6_] = ['akalank' , 26]//save in keys 

console.log(name6_);
console.log(year6_);

//we can this to the obj

const obj = {
    f_name : 'Saman',
    l_name : 'kumar'
};

const {f_name , l_name } = obj;

console.log(f_name);
console.log(l_name);


const {f_name : a , l_name : b} = obj;
console.log(a);
console.log(b);


/////////////////////////////////
// Lecture: Arrays


const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}


//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}




//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));





