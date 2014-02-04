var read = require('read');
var names = [];


read({ prompt: 'Name: '}, function getName(err, result) {
	names.push(result);
	console.log(result);
	console.log(names);

	if (names.length === 3) {
		console.log('hit 3');
		process.exit();
	};


	read({prompt: 'Name 2: '}, getName);

})
