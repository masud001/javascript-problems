function duplicateEncode(word) {
	// ...
	word = word.toLowerCase();
	var charCount = {};
	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
	}
	var result = '';
	for (var j = 0; j < word.length; j++) {
		var char = word[j];
		if (charCount[char] > 1) {
			result += ')';
		} else {
			result += '(';
		}
	}

	return result;
}
console.log(duplicateEncode('recede'));
