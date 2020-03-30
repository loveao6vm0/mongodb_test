var Person = require('../models/BES_mongodb_database');

module.exports = function(req, res, next) {
    Person.find({}, function(err, users) {
        if(err) throw err;
        res.json({userinfos: users});
    });
};