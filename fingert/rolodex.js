var fs = require('fs');
var read = require('read');

var myBook = [];

var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}

// Anything stored in myBook will persist between application runs.

read({ prompt: 'add/list/busey/exit>' }, mainLoop);

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
        
        read({prompt: 'Name: '}, getName);
        

        function getName (err, nameInput) {
            myBook.push(nameInput);
            
            read({prompt: 'Address: '}, getAddress);
            
        }

        function getAddress (err, addressInput) {
            myBook.push(addressInput);

            read({prompt: 'Phone#: '}, getPhone);
        }

        function getPhone (err, phoneInput) {
            myBook.push(phoneInput);

            read({ prompt: 'add/list/busey/exit> '}, mainLoop);
        }
        break;
        case 'busey':
        console.log("The ex-presidents are surfers");
        break; 
    }

}



function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}