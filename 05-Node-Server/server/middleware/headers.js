module.exports = function(req, res, next) { // module.exports allows us to export this module to be used in another file | 'req' refers to the request from the client, specifically focusing on any headers present on the request object.  'res' refers to the response and will be used to present which types of headers are allowed by the server.

    res.header('access-control-allow-origin', '*'); // we call res.header so that the server will respond with what kind of headers are allowed in the request | 'access'control-allow-origin' tells the server the specific origin location that are allowed to talk to the server.  '*' means everything's allowed.
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //these are the HTTP methods that the server will allow (Postman allows you to send 15 different HTTP requests)
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');//these are specific header types that the server will accept from the client

    next(); //tells the middleware to continue its process.  This next() takes the request object and passes it on the endpoint of the server.  Not having this would cause the app to break, as the server wouldn't know what to do after sending the header.  We could also use next() to provide additional headers if we want further restrictions on our server
};