const processOrder = () => {
	console.log('Processing Order for customar 1');
	let currentTime = new Date().getTime();
	while (currentTime + 3000 >= new Date().getTime());

	console.log('Processed Order for customar 1');
};
console.log('take Order for customar 1');
processOrder();
console.log('complete Order for customar 1');
