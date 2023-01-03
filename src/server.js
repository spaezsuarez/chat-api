import express from 'express';
import { startServer } from './config/serverConfig.js';

let server = express();
const PORT = process.env.PORT || 3000;

startServer(server,PORT);