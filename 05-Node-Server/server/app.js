require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller')
var sequelize = require('./db');

sequelize.sync();

app.use(express.json());

app.use(require('./middleware/headers')); //this MUST come before routes are declared


// ********EXPOSED ROUTES
app.use('/test', test)
app.use('/api/user', user);


// ********PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

//You could also write the previous statement the following way without the require statement within the 'user' declaration up above
//app.use('/api/user', require('./controllers/usercontrollers'));
app.use('/test/about', test)

app.listen(3000, function(){
    console.log('WASSUUUUUP!')
});


//app.get???
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint.  It's from the server.");
});