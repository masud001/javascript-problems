/** @format */

// reverse a word. but only the characters and numbers. not the special characters.
// Example:
// Input: "a,b$c"
// Output: "c,b$a"
// Input: "Ab,c,de!$"
// Output: "ed,c,bA!$"
function reverseWord(word) {
	let wordArr = word.split('');
	let start = 0;
	let end = wordArr.length - 1;
	while (start < end) {
		if (!wordArr[start].match(/^[a-zA-Z0-9]+$/)) {
			start++;
		} else if (!wordArr[end].match(/^[a-zA-Z0-9]+$/)) {
			end--;
		} else {
			let temp = wordArr[start];
			wordArr[start] = wordArr[end];
			wordArr[end] = temp;
			start++;
			end--;
		}
	}
	return wordArr.join('');
}
console.log(reverseWord('Ab,c,de!$'));
console.log(reverseWord('c,b$a'));

