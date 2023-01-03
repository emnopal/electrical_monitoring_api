import express from 'express';
import {config} from './src/configs/server.js';
import router from './src/routes/electricalMonitoringRoute.js';

export const app = config(express(), router);

app.set('port', 2023);

app.listen(app.get('port'), () => {
    console.log(`server is running on: http://localhost:${app.get('port')}`);
});
