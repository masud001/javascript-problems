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
// explain step by step of the above code.
// 1. convert the word into an array of characters.
// 2. set the start and end pointer to the first and last index of the array.
// 3. loop until the start pointer is less than the end pointer.
// 4. check if the character at the start pointer is a special character or not.
// 5. if it is a special character then increment the start pointer.
// 6. check if the character at the end pointer is a special character or not.
// 7. if it is a special character then decrement the end pointer.
// 8. if both the characters are not special characters then swap the characters.
// 9. increment the start pointer and decrement the end pointer.
// 10. return the array of characters as a string.
// The time complexity of this code is O(n) where n is the length of the word.
// The space complexity of this code is O(n) where n is the length of the word.
