import { Router } from 'express';
import { createAPIResponse } from '../../util/response.js';
import { HTTP_STATUS } from '../../util/constants.js';
import messageController from './messageController.js';

const messageRouter = Router();

messageRouter.get('/', (request, response) => {

});

messageRouter.post('/', async (request, response) => {
    const { user, message } = request.body;
    messageController.createMessage(user, message).then(({ message, data }) => {
        createAPIResponse(response, message, HTTP_STATUS['Created'], data);
    }).catch(({ error }) => {
        createAPIResponse(response, error, HTTP_STATUS['BadRequest']);
    });
});



export { messageRouter } 