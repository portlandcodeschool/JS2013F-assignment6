var read = require('read'),
	i = 0,
	secondCounter = 0,
	counterArray = [];

setInterval(function () {secondCounter++;}, 1000);

function printTime (err, result) {
	if (i < 10) {
		var time = secondCounter;
		counterArray.push(time);
		i++;

		if (time === 1) {
			console.log("\n" + time + " second has elapsed.\n");
		} else {
			console.log("\n" + time + " seconds have elapsed.\n");
		};

		if (i < 10) {
			read({prompt: 'The timer has is still going. Press \'enter\' for a split time.\n> '}, printTime);
		} else {
			console.log("The ten recorded times are:\n" + counterArray);

			read({prompt: 'Would you like to start another 10 split timer?\nType "start" to start or "exit" to exit.\n>'}, timeLoopInit);
		};

		
	};
};

function timeLoopInit (err, result) {

	if (result === 'exit') {
		process.exit();
	} else if (result === 'start'){
		read({prompt: 'The timer has started. Press \'enter\' for a split time.\n> '}, printTime);
			secondCounter = 0,
			i = 0,
			counterArray = [];
	} else {
		read({prompt: 'Would you like to start a 10 split timer?\nType "start" to start or "exit" to exit.\n>'}, timeLoopInit);
	};

};

read({prompt: 'Would you like to start a 10 split timer?\nType "start" to start or "exit" to exit.\n>'}, timeLoopInit);