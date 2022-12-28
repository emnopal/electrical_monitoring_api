import { get, child } from "firebase/database";
import { dbRef as db } from "../database/database.js";
import { UID as UserID } from "../config/environment.js";

export const electricalMonitorData = async () => {
	try {
		const snapshot = await get(child(db, "UsersData/" + UserID));
		if (snapshot.exists()) {
			return snapshot.val();
		}
		return "No data available";
	} catch (err) {
		return err.message;
	}
};
