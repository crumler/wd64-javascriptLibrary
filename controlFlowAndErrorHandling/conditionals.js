// CONDITIONALS

//Falsy Values

/*

    - false
    - 0
    - "", '', ``
    - null
    - undefine
    - NaN (Not a Number)

    When JS is expecting a boolean value and it is returned with one of these six values, it is evaluated as "falsy"
    
*/

/*
* *********
IF
* *********

    - "If" something is true, do "this thing"

*/

let light = 'on';

if(light == 'on') {
    console.log('The light is on')
}

let weather = 65;

if(weather < 70) {
    console.log('Wear a jacket!')
}

let rain = true;

if(weather < 70 && rain != false) {
    console.log('It is a little chilly outside and it might rain!')
}


/*

* ********
IF ELSE
* ********

    If/Else statements allow us the ability to write out a chain of events.

*/

let today = 75;

if(today < 70) {
    console.log('It is ' + today + ', wear a jacket.');
} else {
        console.log('It is ' + today + '.  No jacket needed.')
};

/*
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
*/

let name = 'Chris Rumler';

if(name === 'Chris Rumler') {
    console.log('Hello!  My name is ' + name + '.');
} else {
    console.log('Hello, what is your name?');
}


/*
* ********
ELSE IF
* ********

This is a condition that would be checked if the above condition was not met.

*/

let cookTime = 10;

if(cookTime === 45) {
    console.log('Let us feast!');
} else if (cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes.  Wait another 5 - 15 minutes.`);
} else if(cookTime >= 20) {
    console.log(`It has been only ${cookTime} minutes.  Wait another 10 - 25 minutes.`);
} else {
    console.log(`It has only been ${cookTime} minutes.  Perhaps at least try cooking it...`);
}

// The end of the ELSE IF statement should have a simple "else" to finish it.

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 18;

if(age <= 17) {
    console.log(`Sorry, but you are ${age} years old.  You are too young to do anything.`);
} else if (age >= 25) {
    console.log(`Congrats!  You are ${age} years old.  You can rent a car!`);
} else if (age >= 21) {
    console.log(`Well done!  You are ${age} years old.  You can drink!`);
} else {
    console.log(`Not too shabby... you are ${age} years old.  You can vote!`);
}


/*
* *******
TERNARIES
* *******

    - This is a quick way of considering an if/else statement.  We are capable of writing out our conditional in a simple line.

*/

let myName = 'Chris Rumler';

// if(myName === 'Chris Rumler') {
//     console.log('Hello!  My name is ' + myName + '.');
// } else {
//     console.log('Hello, what is your name?');
// }

// condition ? if true: else result

//     (1)                          (2)                                     (3)
myName === 'Chris' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

/*
    1: Condition
    2: True (if true)
    3: False (else)

*/


//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
// if(lampOn == true && daytime != true) {
//     console.log('The lamp is on during the night')
// } else if(lampOn != true && daytime != true) {
//     console.log('The lamp is off during the night')
// } else if(lampOn == true && daytime == true){
//     console.log('The lamp is on during the day')
// } else if(lampOn != true && daytime == true) {
//     console.log('The lamp is off during the day')
// } else {
//     console.log('What lamp?')
// }

lampOn == true && daytime != true ? console.log('The lamp is on during the night') : lampOn != true && daytime != true ? console.log('The lamp is off during the night') : lampOn == true && daytime == true ? console.log('The lamp is on during the day') : lampOn != true && daytime == true ? console.log('The lamp is off during the day') : console.log('What lamp?');

/*

* ********
SWITCH
* ********

    - executes a block of code depending on different cases.

*/

let instructor = 'Ing';

switch(instructor) {
    case 'Ing' : 
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
        // Once each case hase been evaluated and we return a result, we need to not to "break" out from our switch statement
    case 'Zach' : 
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' : 
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    default:
            console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
            //Need to use a default to help us catch those cases when none are true
}

instructor = 'Amanda';

switch (instructor) {
    case 'Ing' : 
    case 'Adam' : 
    case 'Eric' : 
    case 'Zach' : 
    case 'Donovan' : 
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case 'Josh' : 
    case 'Amanda' : 
    case 'Casey' : 
        console.log(`${instructor} is part of the Software Dev Team.`);
        break;
    default:
            console.log(`Sorry, I can't find what #{instructor} teaches.`); 
}