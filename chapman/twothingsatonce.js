var read = require('read');

var secondCounter = 0;

setInterval(function () {
  secondCounter++;
}, 1000);


read( {prompt: '> '}, function (err, result) {

	console.log("You typed: " + result);
	console.log("The program had been waiting " + secondCounter + " seconds.");

});