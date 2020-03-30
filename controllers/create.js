var Person = require('../models/BES_mongodb_database');
var datedd = Date().toString();
module.exports = function(req, res, next) {
    var person = new Person(req.body);

    person.save(function(err) {
        if(err) throw err;
        console.log('person saved!');
        //find
        Person.find({}, function(err, dataall) {
            if(err) throw err;

            res.json({data_content : dataall});
        });
    });
};