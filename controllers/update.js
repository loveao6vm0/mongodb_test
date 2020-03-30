var Person = require('../models/BES_mongodb_database');

module.exports = function(req, res, next) {
    Person.findOneAndUpdate( { _id: req.params.id}, req.body, 
        function(err, user) {
            if(err) throw err;
            console.log('person saved!');
            Person.find( {}, function(err, users) {
                if(err) throw err;
                res.json( {userinfos : users} );
            });
        });
};