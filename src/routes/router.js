import { messageRouter } from '../components/messages/messageNetwork.js';

export const setUpRoutes = (server) => {
    server.use('/messages',messageRouter);
}