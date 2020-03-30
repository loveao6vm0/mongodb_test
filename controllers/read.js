var Person = require('../models/BES_mongodb_database');

module.exports = function(req, res, next) {
    Person.findOne({ _id: req.params.id }, function(err, user) {
        if(err) throw err;
        res.json( {userinfo: user} );
    });
};