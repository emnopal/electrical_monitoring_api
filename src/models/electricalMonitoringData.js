import { get, child } from "firebase/database";
import { dbRef as db } from "../databases/database.js";
import { UID as UserID } from "../configs/environment.js";
import { flattenObj } from "../utils/flattenObj.js";
import { QueryObj } from '../utils/queryObj.js';

export const electricalMonitoringData = async () => {
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

export const electricData = await electricalMonitoringData();
export const electricDataFlatten = flattenObj(electricData, 'array');
export const electricDataQueryObj = new QueryObj(electricDataFlatten);
