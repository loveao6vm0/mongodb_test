//var mom = require('moment');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@beseric-cy86d.mongodb.net/test123?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var personSchema = new Schema( {
    Accel_LX    : Buffer,
    Accle_LY    : Buffer,
    Accel_LZ    : Buffer,
    Gyro_LX     : Buffer,
    Gyro_LY     : Buffer,
    Gyro_LZ     : Buffer,
    Mag_LX      : Buffer,
    Mag_LY      : Buffer,
    Mag_LZ      : Buffer,
    Foot_LP1    : Buffer,
    Foot_LP2    : Buffer,
    Foot_LP3    : Buffer,
    Foot_LP4    : Buffer,
    Foot_LP5    : Buffer,
    Foot_LP6    : Buffer,
    Foot_LP7    : Buffer,
    Foot_LP8    : Buffer,
    Foot_LP9    : Buffer,
    Foot_LP10   : Buffer,
    Foot_LP11   : Buffer,
    Accel_RX    : Buffer,
    Accle_RY    : Buffer,
    Accel_RZ    : Buffer,
    Gyro_RX     : Buffer,
    Gyro_RY     : Buffer,
    Gyro_RZ     : Buffer,
    Mag_RX      : Buffer,
    Mag_RY      : Buffer,
    Mag_RZ      : Buffer,
    Foot_RP1    : Buffer,
    Foot_RP2    : Buffer,
    Foot_RP3    : Buffer,
    Foot_RP4    : Buffer,
    Foot_RP5    : Buffer,
    Foot_RP6    : Buffer,
    Foot_RP7    : Buffer,
    Foot_RP8    : Buffer,
    Foot_RP9    : Buffer,
    Foot_RP10   : Buffer,
    Foot_RP11   : Buffer,
    
}, {
    timestamps : {createdAt: 'createdAt'}
});
module.exports = mongoose.model('Person', personSchema, "1");

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