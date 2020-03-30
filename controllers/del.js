var Person = require('../models/BES_mongodb_database');

module.exports = function(req, res, next) {
    Person.findOneAndRemove( { _id: req.params.id }, function(err) {
        
    })
}