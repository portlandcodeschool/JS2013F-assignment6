var secondCounter = 0; 
var read = require('read');


read({ prompt: 'Name: '}, function(err, result) {
	console.log(result);
	console.log('It took you ' + secondCounter + ' seconds to input your name.');
})

setInterval(function () {
	secondCounter++;
}, 1000);
