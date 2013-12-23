var secondCounter = 0,
	read = require('read');

setInterval(function () {
  secondCounter++;
}, 1000);

read({prompt: 'The timer has started. Press \'enter\' for the elapsed time.\n(type \'exit\' to stop)\n> '}, printTime);

function printTime (err, result) {
	if (result === "exit"){
        process.exit();
    }
	
	if (secondCounter === 1) {
		console.log("\n" + secondCounter + " second has elapsed.\n");
		
		read({ prompt: 'The timer is still going. Press \'enter\' for the elapsed time.\n(type \'exit\' to stop)\n> '}, printTime);
	} else {
		console.log("\n" + secondCounter + " seconds have elapsed.\n");
		
		read({ prompt: 'The timer is still going. Press \'enter\' for the elapsed time.\n(type \'exit\' to stop)\n> '}, printTime);	
};
	}
