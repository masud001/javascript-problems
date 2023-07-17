

console.log(' 👍 Find the missing letter 👍');
/*
Find the missing letter.
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/

function findMissingLetter(letterArray) {
	for (let index = 0; index < letterArray.length; index++) {
		const currentElement = letterArray[index].charCodeAt(0);

		const nextElement = letterArray[index + 1].charCodeAt(0);
		if (nextElement - currentElement > 1) {
			return String.fromCharCode(currentElement + 1);
		}
	}

	return 0;
}



let letter = findMissingLetter(['O', 'Q', 'R', 'S']);
console.log('🚀 ~ file: Find the missing letter.js:33 ~ letter:', letter);

