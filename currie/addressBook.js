var fs = require('fs');
var read = require('read');

var myBook = [];

var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}

function ContactObj (name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
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
            read({ prompt: '> '}, mainLoop);
            break;
        case 'add':
            var person = new ContactObj();

            read({prompt: 'Name: '}, getName);

            function getName (err, result) {
                person.name = result;
                console.log("Your name is: " + result);

                read({prompt: 'Address: '}, getAddress);
            }

            function getAddress (err, result) {
                person.address = result;
                console.log("Your address is: " + result);

                read({prompt: 'Phone Number: '}, getPhone);
            }

            function getPhone (err, result) {
                person.phone = result;
                console.log("Your phone number is: " + result);
                myBook.push(person);
                console.log("\nEntry Added.\n")
                read({ prompt: '> '}, mainLoop);
            }
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            read({ prompt: '> '}, mainLoop);
            break;
        }

    //read({ prompt: '> '}, mainLoop);
}

function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}





