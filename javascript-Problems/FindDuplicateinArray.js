function findDuplicate(arr) {
	// Iterate through the array
	for (let i = 0; i < arr.length; i++) {
		console.log('j : ', Math.abs(arr[i]));
		const index = Math.abs(arr[i]) - 1;
		console.log('index : ', index);
		// Calculate the index to mark
		// If the element at the calculated index is negative, it's a repeating element
		console.log('K :', arr[index]);
		if (arr[index] < 0) {
			console.log('repeat element : ', Math.abs(arr[i]));
			return Math.abs(arr[i]); // Return the repeating element
		} else {
			console.log('negetive', (arr[index] = -arr[index]));
			arr[index] = -arr[index]; // Mark the element as visited by making it negative
		}
	}
	return -1; // If no repeating element is found, return -1
}

console.log(findDuplicate([3, 5, 4, 5, 4])); // Output: 4
