const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");
const Goods = require("./models/goods");

const requireAuth = passport.authenticate("jwt", {session: false});
const requireSignin = passport.authenticate("local", {session: false});

module.exports = function(app) {

    //app.get('/someEndPoint', function(req, res) {
    //    Cars.find({}, function(err, allGoods){
    //        if(err){
    //            console.log("Error!");
    //            console.log(err);
    //        }else{
    //            res.send(allGoods);
    //        }
    //    });
    //});

}