// module.exports = function(req, res, next) {
//     res.render('person', {ID: req.params.id });
// }


var Person = require('../models/person');
//Person.createCollection();

module.exports = function(req, res, next) {
    res.send('Thank you');
    var person = new Person({
        firstname : req.body.firstname,
        lastname : req.body.lastname
        
    });

    //person.schema.set('collection', '2');
    person.find({}, function(err, datas) {
        if (err) throw err;
        console.log(datas);
    });
    
    person.save(function(err) {
        if(err) throw err;
        console.log('person saved');
    });
};