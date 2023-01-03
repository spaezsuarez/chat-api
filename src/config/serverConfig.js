import { json } from 'express';

import { setUpRoutes } from '../routes/router.js';

export const startServer = (server,port) => {

    server.use(json());

    setUpRoutes(server);

    server.listen(port,() => {
        console.log(`API escuchando peticiones en: http://localhost:${port}`);
    });
}