var fs = require('fs');
var read = require('read');


var data = fs.readFileSync('data.json');

data = data ? JSON.parse(data) : '';
            
console.log(data);

read({ prompt: 'add/list/busey/exit>' }, mainLoop);

var currentPerson = {};

function mainLoop (err, result) {
    switch (result) {
        case 'exit':
            saveMyData(currentPerson, data);
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
                currentPerson.name = nameInput;
                console.log(currentPerson);
                read({prompt: 'Address: '}, getAddress);
            }

            function getAddress (err, addressInput) {
                currentPerson.address = addressInput;
                console.log(currentPerson);
                read({prompt: 'Phone#: '}, getPhone);
            }
            function getPhone (err, phoneInput) {
                currentPerson.phone = phoneInput;
                console.log(currentPerson);
                read({ prompt: 'add/list/busey/exit> '}, mainLoop);
            }
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            break; 
    }

}


function saveMyData (currentPerson, data) {
    console.log(Array.isArray(data.addresses));
    console.log(data.addresses[data.addresses.length] = currentPerson);
    fs.writeFileSync('data.json', JSON.stringify(data.addresses[data.addresses.length] = currentPerson));
}







// {
//     "addresses": []
// }