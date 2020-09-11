/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Chris';
let lastName = 'Rumler';
let houseNumber = '16837';
let street = 'Aulton Dr.';
let city = 'Noblesville';
let state = 'IN';
let zipcode = '46060';

console.log(firstName + ' ' + lastName + '\n' + houseNumber + ' ' + street + '\n' + city + ', ' + state + ' ' + zipcode);

//String: properties

/*
    - strings have properties, or the qualities associated with that string
    - the length of a string is a property
*/

let myName = 'Chris';
console.log(myName.length);

//String methods

/*
    - methods are tools that can help us manipulate our data
*/

let myNameIs = 'Chris';
console.log(myNameIs.toUpperCase()); //this is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); //this is a method that changes a string to lowercase