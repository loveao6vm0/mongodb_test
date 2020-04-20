var personSchema = require('../models/BES_mongodb_database');
var userandpassmodel = require('../models/BES_userpass');
var mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/BES_database?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test123?retryWrites=true&w=majority');

var getuserinfo;
var getpasswordinfo;
var getdata;
var access = 0;

var conn1 = mongoose.createConnection('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/BES_database?retryWrites=true&w=majority');
var conn2 = mongoose.createConnection('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test123?retryWrites=true&w=majority');

var userData = conn1.model('userandpassmodel', userandpassmodel, 'users&passwords'); //name, Schema, collection
var connData = conn2.model('personSchema', personSchema, '1');

module.exports = function(req, res) {
    var inputvariable;
    var findvariable;
    
    console.log(req.body.user);
    console.log(req.body.password);
    
    userData.find( { user : req.body.user }, function(err, userinfos) {
        if(err) throw err;
        console.log( typeof(userinfos[0]) );
        //console.log( Object.keys(userinfos[0]) );

        if( (userinfos[0] !== undefined) ) { //important
            getuserinfo = userinfos[0].user;
            getpasswordinfo = userinfos[0].password;
            if( (getuserinfo == req.body.user) && (getpasswordinfo == req.body.password) ) {
                access = 1;
            }
        };
    
        
    // });
    console.log(access);
    console.log(getuserinfo);
    console.log(getpasswordinfo);
    

    inputvariable = req.params.name
    if(inputvariable == "9-axis") {
        getdataparams = "Accel_LX Accel_LY Accel_LZ";
    }
    else if(inputvariable == "FP") {
        getdataparams = "Foot_LP1 Foot_LP2 Foot_LP3 Foot_LP4 Foot_LP5 Foot_LP6 Foot_LP7 Foot_LP8 Foot_LP9 Foot_LP10 Foot_LP11";
    }
    else {
        getdataparams = "null";
    }

    console.log(getdataparams);

    connData.find( {}, getdataparams, function(err, datainfos) {
        if(err) throw err;
        getdata = datainfos;
        //console.log(getdata);
        if(access == 1) {
            res.json( {
                user : getuserinfo,
                require_data : getdata
            });
            access = 0;
        }
        else {
            res.end("unidentified user");
        }
        

    });

    

    });
    // res.json( {
    //     //user_password : getuserinfo,
    //     require_data : getdata
    // });

};
/*
module.exports = function(req, res) {
    
    userandpassmodel.find( {}, function(err, userinfo) {
        if (err) throw err;
        getuserinfo = userinfo;
        if(req.body.password == userinfo.password) {
            access = 1;
        } 

    });
    // res.json( {
    //     userinfos : getuserinfo
    // });
    
    var getdataparams = 0;
    var inputvariable = req.params.name ;

    console.log(inputvariable);
    if(inputvariable == "9-axis") {
        getdataparams = "Accel_LX Accel_LY Accel_LZ";
    }
    else if(inputvariable == "FP") {
        getdataparams = "Foot_LP1 Foot_LP2 Foot_LP3 Foot_LP4 Foot_LP5 Foot_LP6 Foot_LP7 Foot_LP8 Foot_LP9 Foot_LP10 Foot_LP11";
    }
    
    Person.find( {}, getdataparams, function(err, data) {
        if(err) throw err;
        //var content = {};
        //console.log(data);
        getdata = data;
        //find 內用 req.body 取參數用 req.params
        
                
        // for (i=0; i< data.length;i++) {
        //     content[i] = data[i]['Accel_LX'] //方法
        //     ;
        // }
             
    });
    res.json( {

        content: getdata, 
        userinfo : getuserinfo
        //userinfo : getuserinfo
    } );

};
*/
/*
var mongoclient = require("mongodb").Mo;

var createuserjson = 
{
    user: "createtest",
    pwd: "createtest",      // Or  "<cleartext password>"
    roles: [
      { role: "readWrite", db: "createtest" }
    ]

}
mongoclient.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test?retryWrites=true&w=majority', function(err, db) {
    if(err) throw err;
    var dbadmin = db.admin();
    dbadmin.addUser("createtest","createtest", { roles: [{
        role : "readWrite",
        db : "createtest"
    }]
    });
});
*/
