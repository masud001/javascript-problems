/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/
function humanReadable(number) {
	let hh = 0,
		mm = 0,
		ss = 0;

	hh = Math.floor(number / 3600);
	mm = Math.floor((number % 3600) / 60);
	ss = number % 60;
	const hour = String(hh).padStart(2, '0');
	const minute = String(mm).padStart(2, '0');
	const second = String(ss).padStart(2, '0');

	return `${hour}:${minute}:${second}`;
}

console.log(humanReadable(3599));
