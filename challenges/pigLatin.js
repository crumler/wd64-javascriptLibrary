/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/


function translatePL(str) {
    let vowel = str.match(/[aeiuoy]/);
    let firstPosition = str.indexOf(vowel);

    if(firstPosition > 0) {
        return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    } else {
        return str + 'ay';
    }
}

console.log(translatePL('Throw'));


function pigLatin() {
        if (phrase.charAt(0) == 'a' || phrase.charAt(0) == 'e' || phrase.charAt(0) == 'i' || phrase.charAt(0) == 'o' || phrase.charAt(0) == 'u' || phrase.charAt(0) == 'A' || phrase.charAt(0) == 'E' || phrase.charAt(0) == 'I' || phrase.charAt(0) == 'O' || phrase.charAt(0) == 'U') {
            phrase = phrase + 'ay';
            console.log(phrase);
        } else {
            let vowelMatch = phrase.match(/[aeiou]/g);
            let firstChar = phrase.indexOf(vowelMatch);
            if(firstChar > 0) {
                return phrase.slice(firstChar) + phrase.slice(0, firstChar);
                console.log(phrase);
            } else {
                console.log('Nope!');
            }
            
        }
    }

pigLatin();