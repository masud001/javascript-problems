
console.log('this is recursion function');

function sum(numbers) {
	let total = 0;
	for (let index = 0; index < numbers.length; index++) {
		total += numbers[index];
	}
	return total;
}

console.log('loop sum is : ', sum([1, 2, 3, 4]));

function sum2(numbers) {
	if (numbers.length === 1) {
		return numbers[0];
	} else {
		return numbers[0] + sum2(numbers.slice(1));
	}
}

console.log('recursion sum is : ', sum2([0, 1, 2, 3, 4]));

function isVowel(char) {
	if (char.length === 1) {
		return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
	} else {
		return false;
	}
}

function countVowels(str) {
	if (str.length === 0) {
		return 0;
	} else {
		return isVowel(str[0]) + countVowels(str.slice(1));
	}
}

console.log('count vowels : ', countVowels('hello world'));
