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
