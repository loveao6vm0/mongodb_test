var mongoose = require("mongoose");
var personSchema = require('../models/BES_mongodb_database');
var conn2 = mongoose.createConnection('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test123?retryWrites=true&w=majority');
var connData = conn2.model('personSchema', personSchema, '1');

module.exports = function(req, res, next) {
    var pos = hashlist.indexOf(req.body.Tokenhash);
    
    //console.log(pos);
    if(pos != -1) {
        var datenew = new Date();
        timelist[pos] = datenew;
        console.log(timelist);
        connData.find({}, function(err, users) {
            if(err) throw err;
            res.json({userinfos: users});
        });
    }
    else {
        res.end('Unknown user');
    }
};