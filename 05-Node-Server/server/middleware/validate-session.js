var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization; //variable created to hold the token, which is pulled from the authorization header of the request coming in
        console.log(sessionToken) //token is printed to the console to ensure that token is being sent to the server (make sure to remove once done, as this is a security risk)
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' });
    else { //no 'user' property is ever provided in the request, so only tokens will get checked.  This prevent unauthorized use of a token that was assigned to a different user.
        jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //verify method decodes the token with the provided secret, then sends a callback with two variables.  If successful, 'decoded' will contain the decoded payload.  Otherwise, 'decoded' will remain undefined (err is null by default)
            if(decoded){
                User.findOne({where: { id: decoded.id}}).then(user => { //if 'decoded' has a value, the Sequelize 'findOne' method looks for an id in the 'users' table that matches the 'decoded.id' property.  This value is then passed into a callback.
                    req.user = user; //the callback sets the 'user' value for the request as the 'id' value passed to it, then sends the request on to its next destination.  (This prooperty will be necessary later in adding to the database)
                    next();
                },
                function(){ //if no matching 'id' is found, error message shows
                    res.status(401).send({error: 'Not authorized'});
                });
            } else { //if no value for 'decoded', error message shows
                res.status(400).send({error: 'Not authorized'});
            }
        });
    }
}}