/*

* ********
FOR LOOPS
* ********

    - Loops help us repeat a process without writing a lot of code.

    We need to:
        1) Create an Index
        2) Run a condition
        3) Change the indexing variable (execution of condition)

*/

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/*

    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against
        (index; condition; change index -> result)

        for(<create index variable>; <run condition>; <change index>) {
            <return results>
            *will continue until run condition is met.
        }

*/

// let x = 20;

// for(i = 10; i <= x; i++) {
//     console.log(i);
// }

// CHALLENGE:

//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration

let i = 2;

for(i = 2; i >= -10; i -= 4) {
    console.log(i);
}

//The following counts and spells out each letter in that Mary Poppins word

let word = 'supercalifragilisticexpialidocious';

for (let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}

/*
* ********
FORIN LOOP
* ********



*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

//'info' is just a placeholder (this can be anything)

/*

    for(variable IN object) {
        <statement>
    }
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    console.log(item);
    console.log(list[item]);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';

for(correctCase in name) {
     name[0].toUpperCase(name);
     name[1];
     name[2].toLowerCase(name);
     name[3];
     name[4];
     name[5];
    console.log(name);
}

//The above did not work.  Below is solution:

let name = 'piCard';
let fullName;

for(char in name) {

    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}

console.log(fullName);

/*
    1) We are taking the value of the "n" index and declaring the position of 0
    2) We assign our empty variable to equal that positioned value.
    3) If that index is 0, we will take that value and run a ".toUpperCase()"" method on it.
    4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
    5) If the index is NOT 0, we want to run a ".toLowerCase()" method so that all letters are in proper case.

*/

/*
* ********
FOROF LOOP
* ********

    - In order to run a FOR OF loop, the "thing" must be numbered like an array.

    let object = {
        key: value,
        key: value,
        key: value
    };

    for(o of object) {
        <breaks>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/*
    Quick Recap:

        for loop: loops through a block of code until the counter reaches a specified number.
        for in loops: loops through properties of an object.
        for of loops: loops over iterable objects as an array and strings *strings can be accessed much in the same way as arrays.
*/