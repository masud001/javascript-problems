/*
Kth Row of Pascal's Triangle
Problem Description
Given an index k, return the kth row of the Pascal's triangle.
Pascal's triangle: To generate A[C] in row R, sum up A'[C] and A'[C-1] from previous row R - 1.

Example:

Input : k = 3


Return : [1,3,3,1]

Note: k is 0 based. k = 0, corresponds to the row [1]. 

Note: Could you optimize your algorithm to use only O(k) extra space?
*/
//param A : integer
//return a array of integers

function pascals(numRows) {
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];
	let result = [];
	for (let row = 1; row <= numRows; row++) {
		let arr = [];
		for (let col = 0; col < row; col++) {
			if (col === 0 || col === row - 1) {
				arr.push(1);
			} else {
				arr.push(result[row - 2][col - 1] + result[row - 2][col]);
			}
		}
		result.push(arr);
	}
	return result;
}
console.log(pascals(4));
