

const oncify = (fn) => {
	let called = false;
	const inner = (input) => {
		if (!called) {
			const output = fn(input);
			called = true;
			return output;
		}
		return `I have already been called`;
	};
	return inner;
};
const add = (num) => num + 10;

const oncifiedAdd = oncify(add);
console.log(oncifiedAdd(5));

// generator function to get the next value
function* getNextId() {
	console.log('1. code before the first yield');
	yield 100;
	console.log('2. code before the second yield');
	yield 200;
}

const generator = getNextId();
console.log('🚀 ~ generator:', generator);

console.log(generator.next());
console.log(generator.next());

function spreadArgs(fn) {
	return function spread(args) {
		return fn(...args);
	};
}

function f(x, y, z, w) {
	return x + y + z + w;
}

var g = spreadArgs(f);
console.log(g([1, 2, 3, 4, 5, 6]));
