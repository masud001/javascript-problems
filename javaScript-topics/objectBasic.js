const person = {
	name: ['masud', 'muhamamd'],
	age: 32,
	bio: function () {
		console.log(`${this.name[0]} and ${this.name[1]} is ${this.age} years old`);
	},
	introduceSelf: function () {
		console.log(`Hi! I'm ${this.name[0]}.`);
	},
};
console.log(person);
person.bio();
person.introduceSelf();



