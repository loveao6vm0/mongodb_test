var mongoose1 = require('mongoose');

//mongoose1.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/BES_database?retryWrites=true&w=majority');

var DSchema = mongoose1.Schema;

var userandpass = new DSchema ( {
    user : String,
    password : String
});

//module.exports = mongoose1.model("userandpassmodel", userandpass, "users&passwords");
module.exports = userandpass;