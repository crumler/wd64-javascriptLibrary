//Controller with one get request that responds with a message that says 'Hello from the test controller'

const {Router, response} = require('express');

const testControllerRouter = Router();  //declares variable that includes the requiring of Express

testControllerRouter.get('/', (request, response) => {
    let message = 'Hello from the test controller';
    response.send(message);
});

module.exports = testControllerRouter;