/* 
一個分業對應一個controllers
每一個controller只負責一個頁面的render(Template + data)
整個程式只有一個router，依據url呼叫不同的controller
*/
/* 1 MVC*/

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

app.listen(port);
