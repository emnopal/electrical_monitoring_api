import { electricalMonitorData } from "./src/controller/electricalMonitorData.js";

const electricData = await electricalMonitorData();

console.log(electricData);