const jsonService = require('./services/jsonService.js');

module.exports = function(app) {

    app.get('/cars', function(req, res) {
        var json;
        res.setHeader('Content-Type', 'application/json');

        jsonService.getCarsJson(function(json){
                res.send(json);
        });
    });
}