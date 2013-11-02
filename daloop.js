var read = require('read');


read({ prompt: 'Name: '}, function getName(err, result) {
	console.log(result);
	if (result === 'exit') {
		process.exit();
	};

	read({prompt: 'Name: '}, getName);

})
