/** @format */

function a() {
	let x = 1;
	return (b) => {
		console.log(x);
	};
}

// console.log(a()(10));
let c = a();
console.log(c());
