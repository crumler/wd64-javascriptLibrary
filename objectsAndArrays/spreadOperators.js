/*
* **********
! SYNTAX
* **********

    keyword varName = [...arrayName]

*/

const nameOne = ['Chris', 'Rumler'];
const nameTwo = ['Eric', 'Winebrenner'];
const copiedNames = ['Adam', 'Jayne', ...nameOne, ...nameTwo];

console.log(copiedNames); // [ 'Adam', 'Jayne', 'Chris', 'Rumler', 'Eric', 'Winebrenner' ]

const copiedNamesDiff = ['Adam', 'Jayne', nameOne, nameTwo];
console.log(copiedNamesDiff); // [ 'Adam', 'Jayne', [ 'Chris', 'Rumler' ], [ 'Eric', 'Winebrenner' ] ]

/*

    Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array.  This is so that the values that were pulled out gets placed into our new array.

    ...arrName (if not within array, this will throw an error)

    - We can add to our original array without altering our copied array.
        - dependent on what data types we are using.

*/

nameOne.unshift('Mr');
console.log('Altered: ', nameOne, 'Spread: ', copiedNames); // Altered:  [ 'Mr', 'Chris', 'Rumler' ] Spread:  [ 'Adam', 'Jayne', 'Chris', 'Rumler', 'Eric', 'Winebrenner' ]


/*
* **********
! ... NUMBERS
* **********

*/

console.log(Math.min(1, 5, -3)); // -3

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices)); // NaN  (expects numbers and not an array)
console.log(Math.min(...prices)); // 3.99 (Spread operator pulls elements out of the prices array to allow the min method to work.)

/*
* **********
! ... OBJECTS
* **********

*/

const persons = [
    {
        name: 'Lore',
        species: 'Android'
    },
    {
        name: 'Picard',
        species: 'Human'
    },
];

const copiedPerson = [...persons];
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPerson);
//WE are only changing the original array
//console.log Results:
// Obj [
//     { name: 'Lore', species: 'Android' },
//     { name: 'Picard', species: 'Human' },
//     { name: 'Worf', species: 'Klingon' }
//   ] SO [
//     { name: 'Lore', species: 'Android' },
//     { name: 'Picard', species: 'Human' }
//   ]

/*

    -primitive variable = primitive value
        example:
            let x = 10;
            let y = 'abc';
            let z = null;

        - JS stores to memory both variable and values:
            Variables   Values
            x           10
            y           'abc'
            z           null

            example:
                let a = x;
                let b = y;
                console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'
        - Altering one variable wouldn't affect the previous variable
            a = 6;
            b = 'xyz'
            console.log(x, y, a, b) -> 10, 'abc', 5, 'xyz'

        - 3 Data Types that are passed by reference: Array, Functions, and Objects
            - technically objects.
            - non primitive variables are given a reference to the value - the reference points to the location in memory.

            * pretend datatype: address - denoted by < >

            let arr = [];
            arr.push(1);

            - How our code would look in memory:

            VARIABLES   VALUES  ADDRESS OBJECT
            arr         <#001>  #00a    []
            arr         <#001>  #00a    [1]

            let ref = [1];
            let refCopy = ref;

            - Memory:
            VARIABLES   VALUES  ADDRESS OBJECT
            ref         <#001>  #001    [1]
            refCopy     <#001> 

            ref.push(2)
            console.log(ref, refCopy) -> [1,2], [1,2]
*/

copiedPersons[0].name = "Data";
console.log('Obj:', persons, 'SO:', copiedPersons);


/*
* **********
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* **********
*/

const comics = [
    {title: 'Spider-Man', year: 1962}, {title: 'Detective Comics', year: 1939}
];

const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year
}));

comics.push({title: 'Calvin and Hobbes', year: 1985});
//console.log('Before Altering: ', copiedComics);
//console.log Results:

// Before Altering:  [
//     { title: 'Spider-Man', year: 1962 },
//     { title: 'Detective Comics', year: 1939 }
//   ]

console.log('After Altering: ', comics, copiedComics);
//console.log Results:
// After Altering:  [
//     { title: 'Spider-Man', year: 1962 },
//     { title: 'Detective Comics', year: 1939 },
//     { title: 'Calvin and Hobbes', year: 1985 }
//   ] [
//     { title: 'Spider-Man', year: 1962 },
//     { title: 'Detective Comics', year: 1939 }
//   ]