var read = require('read');


read({ prompt: '(enter \'exit\' to exit) Input: '}, function dudeInput (err, result) {
	
	console.log("You entered " + result);
	if (result === "exit"){
		process.exit();
	}
	read({ prompt: '(enter \'exit\' to exit) Input: '}, dudeInput);
});





