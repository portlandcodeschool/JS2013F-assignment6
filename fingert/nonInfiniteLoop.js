/* 
Will allow user to add 5 items to array, displaying contents after
*/

var read = require('read');
var newArray = [];
var num = 1;




read({ prompt: 'Input: '}, function dudeInput (err, result) {
	newArray.push(result);
	num++;
	console.log("You entered " + result);
	if (num <= 5){
		read({ prompt: 'Input: '}, dudeInput);
	}
	else {
		console.log(newArray);
	}
});
