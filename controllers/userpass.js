var mongoose = require("mongoose");
var crypto = require("crypto");

//change role
mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/BES_database?retryWrites=true&w=majority');
var Schema = mongoose.Schema;
var userSchema = new Schema( {
    user    : String,
    password : String
}, {
});
var usermodel = mongoose.model('usermodel',userSchema,"users&passwords");

//var Person = require('../models/BES_mongodb_database');
var datedd = Date().toString();
module.exports = function(req, res, next) {
    //var person = new Person(req.body);
    var hmacans1;
    console.log("userpass");
    console.log(req.body.user);
    console.log(req.body.password);
    usermodel.findOne({user : req.body.user}, function(err, logindata) {
        if(err) throw err;
        //res.json( {Tokenhash : logindata });
        if (logindata.password == req.body.password) {
            hmacans1 = crypto.createHmac("sha1","BES").update( String(req.body.user) ).digest("hex");
            //console.log(hmacans1);
            
            //
            var datenew = new Date();
            var pos = hashlist.indexOf(hmacans1);
            console.log(pos);
            if( (pos == -1) ) {
                hashlist.push(hmacans1);
                timelist.push(datenew);
                console.log(hashlist);
                console.log(timelist);
                res.json( {Tokenhash : hmacans1 });
            }
            else {
                var hmacAgain = hashlist[pos];
                res.json( {Tokenhash : hmacAgain, login_State : "Again" });
                //res.end("Already login user");
            }
        }


        
    })


    // person.save(function(err) {
    //     if(err) throw err;
    //     console.log('person saved!');
    //     //find
    //     Person.find({}, function(err, dataall) {
    //         if(err) throw err;

    //         res.json({data_content : dataall});
    //     });
    // });
};

// Person.findOne({ _id: req.params.id }, function(err, user) {
    //     if(err) throw err;
    //     res.json( {userinfo: user} );
    // });