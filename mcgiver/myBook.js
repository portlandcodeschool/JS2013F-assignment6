var fs = require('fs');
var read = require('read');

var myBook = [];

var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}

// Anything stored in myBook will persist between application runs.

read({ prompt: '> ' }, mainLoop);

function mainLoop (err, result) {
    switch (result) {
        case 'exit':
            saveMyData();
            console.log("See yah!");
            process.exit();
        case 'list':
            myBook.forEach(function (item) {
                console.log(item);
            });
            break;
        case 'add':
            // implement here!
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            break;
        }

    read({ prompt: '> '}, mainLoop);
}

function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}