/* eslint prefer-destructuring: 0 */

import { config } from 'dotenv';

config();

export const apiKey = process.env.apiKey;
export const authDomain = process.env.authDomain;
export const databaseURL = process.env.databaseURL;
export const projectId = process.env.projectId;
export const storageBucket = process.env.storageBucket;
export const messagingSenderId = process.env.messagingSenderId;
export const appId = process.env.appId;
export const measurementId = process.env.measurementId;
export const UID = process.env.UID;
