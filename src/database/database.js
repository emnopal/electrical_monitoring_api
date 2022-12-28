import { getDatabase, ref } from "firebase/database";
import { app } from "../config/config.js";

export const db = getDatabase(app);
export const dbRef = ref(db);
