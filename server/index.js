// Main File Server
// Express Install
// npm init initializze kry ga npm ko 
// npm i express

import bodyParser from 'body-parser';
import Connection from './database/db.js';
import express from 'express';
import Route from './routes/route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Route);

Connection();

const PORT = 8000;
app.listen(PORT, () => console.log(`Running ${PORT}`))