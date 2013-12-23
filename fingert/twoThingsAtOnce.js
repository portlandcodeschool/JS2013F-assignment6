var read = require('read');
var secondCounter = 0;

setInterval(function () {
  secondCounter++;
}, 1000);

read({ prompt: 'Input race! Enter your input.\n(enter \'exit\' to exit): '}, function inputCounter (err, result) {
  
console.log("It took you " + secondCounter + " seconds to submit your input. (" + result + ")");
if (result === "exit"){
	process.exit();
}
read({ prompt: 'Input race! Enter your input.\n(enter \'exit\' to exit): '}, inputCounter);
});





