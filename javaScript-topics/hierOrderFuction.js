/** @format */

const copyArrayAndManipulates = (array, instruction) => {
	let output = [];
	for (let index = 0; index < array.length; index++) {
		output.push(instruction(array[index]));
	}
	return output;
};

const multiplyBy2 = (input) => {
	return input * 2;
};
const dividedBy2 = (input) => {
	return input / 2;
};

const array = [1, 2, 3];

const result = copyArrayAndManipulates(array, multiplyBy2);
const result2 = copyArrayAndManipulates(array, dividedBy2);
console.log('🚀 ~ result2:', result2);

console.log(result);

//! reduce function in javascript.

const result3 = array.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
console.log('🚀 ~ result3:', result3);
