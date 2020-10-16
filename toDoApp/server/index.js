const Express = require("express");  //brings in Express
const applicationControllers = require('./controllers/index')
const expressApplicationObject = new Express(); //creates a new instance using Express

expressApplicationObject.use('/test', applicationControllers.test)

expressApplicationObject.get('/', (request, response) => {  //The ".get" determines how you should query in Postman
    console.log('[server]: Root GET request received');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('{server}: Response being dispatched');
    response.send('Root Route Hit, hello from the toDo server!'); //sends the quoted response
});

expressApplicationObject.listen(8000, () => {
    console.log("[server]: App is listening on port 8000");
});

//CHALLENGE: Recieve a POST request at the route "/challenge"
// Takes two values inside of the body:
//  Name -> A string for a name
//  Age -> A number for the age

// Respond with this message:
//  If the user is 18 and older, the message will be:
//   "<name>, you are an adult!"
//  Else:
//   "<name>, you will be an adult soon."

// JSON in a request is a STRING
// expressApplicationObject.use(Express.json());

// expressApplicationObject.post('/challenge', (request, response) => {
//     let data = request.body;
//     let message = data.age >= 18 //if
//     ? `${data.name}, you are an adult!`  //then
//     : `${data.name}, you will be an adult soon.`; //else
    
//     response.send(message);


    // if(age < 18) {
    //     response.send(name + ', you will be an adult soon.');
    // }else{
    //     response.send(name + ', you are an adult!');
    // }
    // console.log('{server}: Response being dispatched');
    // response.send('Root Route Hit, hello from the toDo server!');
// });