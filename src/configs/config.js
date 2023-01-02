import { initializeApp } from "firebase/app";
import {
	apiKey,
	appId,
	authDomain,
	databaseURL,
	measurementId,
	messagingSenderId,
	projectId,
	storageBucket,
} from "./environment.js";

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	databaseURL: databaseURL,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId,
};

export const app = initializeApp(firebaseConfig);
