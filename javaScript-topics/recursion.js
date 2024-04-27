/** @format */

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
