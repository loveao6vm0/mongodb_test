//var mom = require('moment');
var mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test123?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var personSchema = new Schema( {
    Accel_LX    : [Number],
    Accel_LY    : [Number],
    Accel_LZ    : [Number],
    Gyro_LX     : [Number],
    Gyro_LY     : [Number],
    Gyro_LZ     : [Number],
    Mag_LX      : [Number],
    Mag_LY      : [Number],
    Mag_LZ      : [Number],
    Foot_LP1    : [Number],
    Foot_LP2    : [Number],
    Foot_LP3    : [Number],
    Foot_LP4    : [Number],
    Foot_LP5    : [Number],
    Foot_LP6    : [Number],
    Foot_LP7    : [Number],
    Foot_LP8    : [Number],
    Foot_LP9    : [Number],
    Foot_LP10   : [Number],
    Foot_LP11   : [Number],
    Accel_RX    : [Number],
    Accel_RY    : [Number],
    Accel_RZ    : [Number],
    Gyro_RX     : [Number],
    Gyro_RY     : [Number],
    Gyro_RZ     : [Number],
    Mag_RX      : [Number],
    Mag_RY      : [Number],
    Mag_RZ      : [Number],
    Foot_RP1    : [Number],
    Foot_RP2    : [Number],
    Foot_RP3    : [Number],
    Foot_RP4    : [Number],
    Foot_RP5    : [Number],
    Foot_RP6    : [Number],
    Foot_RP7    : [Number],
    Foot_RP8    : [Number],
    Foot_RP9    : [Number],
    Foot_RP10   : [Number],
    Foot_RP11   : [Number],
    
}, {
    timestamps : {createdAt: 'createdAt'}
});
module.exports = personSchema;
//module.exports = mongoose.model("personSchema", personSchema, "1");
/*
var personSchema = new Schema( {
    firstname : String,
    lastname : String
},{
    collection: 'asdf' 建立collection name
});

mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/ test123 ?retryWrites=true&w=majority');
test123 -> database to restore
*/

/*
    Accel_LX    : Buffer,
    Accle_LY    : [Number, Number, Number, Number, Number],
    Accel_LZ    : [Number, Number, Number, Number, Number],
    Gyro_LX     : [Number, Number, Number, Number, Number],
    Gyro_LY     : [Number, Number, Number, Number, Number],
    Gyro_LZ     : [Number, Number, Number, Number, Number],
    Mag_LX      : [Number, Number, Number, Number, Number],
    Mag_LY      : [Number, Number, Number, Number, Number],
    Mag_LZ      : [Number, Number, Number, Number, Number],
    Foot_LP1    : [Number, Number, Number, Number, Number],
    Foot_LP2    : [Number, Number, Number, Number, Number],
    Foot_LP3    : [Number, Number, Number, Number, Number],
    Foot_LP4    : [Number, Number, Number, Number, Number],
    Foot_LP5    : [Number, Number, Number, Number, Number],
    Foot_LP6    : [Number, Number, Number, Number, Number],
    Foot_LP7    : [Number, Number, Number, Number, Number],
    Foot_LP8    : [Number, Number, Number, Number, Number],
    Foot_LP9    : [Number, Number, Number, Number, Number],
    Foot_LP10   : [Number, Number, Number, Number, Number],
    Foot_LP11   : [Number, Number, Number, Number, Number],
    Accel_RX    : [Number, Number, Number, Number, Number],
    Accle_RY    : [Number, Number, Number, Number, Number],
    Accel_RZ    : [Number, Number, Number, Number, Number],
    Gyro_RX     : [Number, Number, Number, Number, Number],
    Gyro_RY     : [Number, Number, Number, Number, Number],
    Gyro_RZ     : [Number, Number, Number, Number, Number],
    Mag_RX      : [Number, Number, Number, Number, Number],
    Mag_RY      : [Number, Number, Number, Number, Number],
    Mag_RZ      : [Number, Number, Number, Number, Number],
    Foot_RP1    : [Number, Number, Number, Number, Number],
    Foot_RP2    : [Number, Number, Number, Number, Number],
    Foot_RP3    : [Number, Number, Number, Number, Number],
    Foot_RP4    : [Number, Number, Number, Number, Number],
    Foot_RP5    : [Number, Number, Number, Number, Number],
    Foot_RP6    : [Number, Number, Number, Number, Number],
    Foot_RP7    : [Number, Number, Number, Number, Number],
    Foot_RP8    : [Number, Number, Number, Number, Number],
    Foot_RP9    : [Number, Number, Number, Number, Number],
    Foot_RP10   : [Number, Number, Number, Number, Number],
    Foot_RP11   : [Number, Number, Number, Number, Number],    
    */