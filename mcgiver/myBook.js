var fs = require('fs');
var read = require('read');

var myBook = [];

var name = "";
var address = "";
var phone = "";

function Newcontact(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
}

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
            read({ prompt: '> ' }, mainLoop);
            break;
        case 'add':
            startContact();
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            read({ prompt: '> ' }, mainLoop);
            break;
        }
}

function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}

function startContact () {
    read({prompt: 'Whats your name?'}, getName);
}

function getName (err, result, silent) {
   console.log("Your name is: " + result);
   name = result;
   read({prompt: "What's your address?"}, getAddress);
}

function getAddress (err, result, silent) {
    console.log("Your address is: " + result);
    address = result;
    read({prompt: "What's your phone number?"}, getPhone);
}

function getPhone (err, result, silent) {
    console.log("Your phone is: " + result);
    phone = result;
    var user = new Newcontact(name, address, phone);
    myBook.push(user);
    saveMyData();
    read({ prompt: '> ' }, mainLoop);
}








