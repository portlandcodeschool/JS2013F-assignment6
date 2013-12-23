//loop within loop
var read = require('read'),
newArray = [],
num = 1;


read({ prompt: 'Do you wish to play?(y/n)'}, function firstLoop (err, result){
	if (result === 'n' ){
		process.exit();
	} else{
		read({prompt: 'Enter word (\'exit\' to quit): '}, function secondLoop (err, result) {
			num++;
			if (num > 5){
				newArray.push(result);
				console.log(newArray.toString());
				num = 1, newArray = [];
				read({prompt: 'Do you wish to play?(y/n)'}, firstLoop);
			} else if (result === 'exit'){
				console.log(newArray.toString());
				num = 1, newArray = [];
				read({prompt: 'Do you wish to play?(y/n)'}, firstLoop);
			} else if (num < 6){
				newArray.push(result);
				read({ prompt: 'Enter word (\'exit\' to quit): '}, secondLoop);
			} 
		});
	}
	firstLoop;
});