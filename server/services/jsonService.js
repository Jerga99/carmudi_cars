var fs = require('fs');
const path = require("path");
const jsonPath = path.join(__dirname, "../data", "cars.json");

exports.getCarsJson = function(fn) {
    var json;

    fs.readFile(jsonPath, 'utf8', function (err, data) {
        if (err) throw err;
        json = JSON.parse(data);
        fn(json);
    });
};