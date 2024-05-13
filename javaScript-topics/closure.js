

const { functions } = require('lodash');

function a() {
	let x = 1;
	return (b) => {
		console.log(x);
	};
}



const functionCreator = () => {
	var counter = 3;
	const add3 = (num) => {
		counter += num;
		return counter;
	};
	return add3;
};
const functionGenerator = functionCreator();

const result = functionGenerator(2);
console.log('🚀 ~ result:', result);
console.log('🚀 ~ functionGenerator:', functionGenerator);

const outer = () => {
	let outerVar = 10;
	const inner = () => {
		outerVar++;
	};
	return inner;
};
const result1 = outer();
console.log('🚀 ~ result1:', result1());

// lazy evaluation and Eager evaluation

function repeater(count) {
	var str = ''.padStart(count, 'ABC');
	return function allTheAs() {
		return str;
	};
}
var A = repeater(10);
console.log(A());

var merge = function (nums1, m, nums2, n) {
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;

	while (j >= 0) {
		if (i >= 0 && nums1[i] > nums2[j]) {
			nums1[k--] = nums1[i--];
		} else {
			nums1[k--] = nums2[j--];
		}
	}
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
