require("./connection");

// const Product = require("./models/Proveedores");
// const product = new Product({
//     name: 'laptop',
//     description: 'lenovo algo',
//     price: 1399.99
// });

// product.save((err, document) =>{
//     if (err ? console.log(err) : console.log(document));
// });

var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
    input: fs.createReadStream('restaurants.json')
});

var lineno = 0;
myInterface.on('line', function (line) {
    lineno++;
    console.log('Line number ' + lineno + ': ' + line);
    line.save((err, document) =>{
        if (err ? console.log(err) : console.log(document));
    });
});