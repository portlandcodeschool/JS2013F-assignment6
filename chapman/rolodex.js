var fs = require('fs');
var read = require('read');

var myBook = [];


var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}




// Anything stored in myBook will persist between application runs.

read({ prompt: '> '}, mainLoop);

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

            read({prompt: "Name: ", silent : true}, getName);
            //console.log("Name: ");
            function getName(err, name) {
                //console.log("Name: ");
                myBook.push(name);
                read({prompt: "Address: ", silent : true}, getAddress);
            };

            //getName();

            function getAddress(err, address) {
                myBook.push(address);
                read({prompt: "Phone number: ", silent : true}, getPhone);
            };


            function getPhone (err, phone) {
                myBook.push(phone);
                read({prompt: "Type 'add', 'list', 'busey', or 'exit'.", silent : true}, mainLoop);

            };

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

