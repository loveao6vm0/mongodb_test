var Person = require('../models/BES_mongodb_database');

module.exports = function(req, res) {

    
    var inputvariable = req.params.name ;
    console.log(inputvariable);

    Person.find( {}, inputvariable, function(err, data) {
        if(err) throw err;
        var content = {};
        //console.log(data);

        //find 內用 req.body 取參數用 req.params
        
        

        // if(inputvariable == "9-axis") {

        // }
        
        // for (i=0; i< data.length;i++) {
        //     content[i] = data[i]['Accel_LX'] //方法
        //     ;
        // }
        res.json( {

            content: data } );
    });
};