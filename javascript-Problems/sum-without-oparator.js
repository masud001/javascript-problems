function addWithoutArithmeticOperators(A, B) {
	while (B !== 0) {
		let carry = A & B;
		console.log('carry :', carry);
		console.log('A :', A, ' and B : ', B);
		A = A ^ B;
		console.log('A :', A, ' And B : ', B);
		B = carry << 1;
		console.log('B : ', B);
	}
	return A;
}

// Test cases
console.log(addWithoutArithmeticOperators(3, 10)); // Output: 13

// console.log(addWithoutArithmeticOperators(6, 1)); // Output: 7
