var express = require ('express');
var path = require ('path');
var mongoose = require ('mongoose');
var config = require ('./config/database');
var bodyParser = require ('body-parser');

//conect to database 
mongoose.connect(config.database);

var db = mongoose.connection;
db.on ('error', console.error.bind(console, 'connection error euy:'));
db.once('open', function () {
    //
    console.log('connected to Mongodb Succsess')
});

//initial app
var app = express();

//setup view engine
app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine','ejs');

//setup body parser form
app.use(bodyParser.urlencoded({ extended:fals }))

//2 paseser jason 
app.use(bodyParser.json())

//det untuk route
var pages = require('./routes/pages');
var adminpages = require('./routes/adminpages');

//redirect
app.use('/', pages);
app.use('/admin/pages', adminpages);



//set up public folder
app.use(express.static(path.join(__dirname, 'public')));






// setup server
var port = 3000;
app.listen(port, function(){

    console.log("server runing on port" + port);
})