import express from 'express';
import {config} from './src/configs/server.js';
import router from './src/routes/electricalMonitoringRoute.js';
import * as functions from 'firebase-functions';

const app = config(express(), router);

// use this for local development
// app.set('port', 2023);

// app.listen(app.get('port'), () => {
//     console.log(`server is running on: http://localhost:${app.get('port')}`);
// });

exports.app = functions.https.onRequest(app);
