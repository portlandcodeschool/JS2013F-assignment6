var secondCounter = 0,
	read = require('read'),
	counterArray = [],
	i = 0;

setInterval(function () {
  secondCounter++;
}, 1000);

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
			read({prompt: 'The timer has is still going. Press \'enter\' for the elapsed time.\n> '}, printTime);
		} else {
			console.log("The ten recorded times are:\n" + counterArray);
			process.exit();
		};
	};
};

read({prompt: 'The timer has started. Press \'enter\' for the elapsed time.\n> '}, printTime);