/* 
一個分業對應一個controllers
每一個controller只負責一個頁面的render(Template + data)
整個程式只有一個router，依據url呼叫不同的controller
*/
/* 1 MVC*/
var crypto = require("crypto");
var Q = [30, 20, 10, 0];
hashlist = [];
timelist = [];

var events = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function() {
    if(Q[0] > 0){
        Q[0] -= 1;
        console.log(Q[0]);
    }
};
eventEmitter.on("substract", eventHandler);
//

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routers = require('./routers');

var port = process.env.PORT || 3000;
//view engine ejs
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');
//static file
app.use(express.static(path.join(__dirname, 'public')));
//body parser
app.use(bodyParser.urlencoded({ extended: false })); //form
app.use(bodyParser.json()); //json
//router set
app.use('/', routers);

//
app.on("AAA",eventHandler);

// var hashans = crypto.createHash('sha1').update("ericliao1126").digest("hex");
// var hashans2 = crypto.createHash('sha1').update("ericliao").digest("hex");
// var hmacans1 = crypto.createHmac("sha1","BES").update("ericliao1126").digest("hex");
// var hmacans2 = crypto.createHmac("sha1","BES666").update("ericliao1126").digest("hex");

// var ddate1 = new Date(2012,12,25,8,0,0);
// var ddate2 = new Date(2012,12,26,8,0,0);
// console.log(ddate2 - ddate1);

function em() {
        if(Q[0] > 0){
            Q[0] -= 1;
            console.log(Q[0]);
            //console.log(hashlist.indexof());
        }
        let i;
        let currentdate = new Date();
        if( timelist.length > 0) {
            for(i=0;i<timelist.length;i++) {
                console.log( (currentdate - timelist[i])/1000);
                if( (currentdate - timelist[i])/1000> (1800) ){
                    timelist.splice(i,1);
                    hashlist.splice(i,1);
                    console.log(timelist);

                }
            } 
        }
        // console.log(hashans);
        // console.log(hashans2);
        // console.log(hmacans1);
        // console.log(hmacans2);


};


var inttime = function() {
    setInterval(em,10000);
}

inttime();

app.listen(port);


/*
    var pos = Q.indexOf(req.body.Token);
    if(pos = -1){
        console.log(pos);
        Q.push(req.body.Token);
        console.log(Q[4]);
    }
*/