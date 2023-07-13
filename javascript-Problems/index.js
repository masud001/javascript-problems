console.log('Hello JavaScript Problems 🤴');

const arrayOfSheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];
console.log('🚀 ~ file: index.js:29 ~ arrayOfSheep:', arrayOfSheep);

function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	const chackSheep = (sheep) => {
		return sheep === true;
	};

	const count = arrayOfSheep.filter(chackSheep);
	return count.length;
}
// console.log(countSheeps(arrayOfSheep));

function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		let mul = i * x;
		z.push(mul);
	}

	return z;
}

// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countBy(2, 5) === [2, 4, 6, 8, 10];
countBy(1, 10);
console.log(countBy(2, 5));
