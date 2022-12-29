import { electricalMonitorData } from "./src/controller/electricalMonitorData.js";
import { flattenObj } from "./src/utils/flattenObj.js";
import { QueryObj } from './src/utils/queryObj.js';
import { write } from "./src/utils/writeObj.js";

const electricData = await electricalMonitorData();
const electricDataFlatten = flattenObj(electricData, 'array');
// write(electricData);
// write(electricDataFlatten);
console.log(electricDataFlatten);

// const electricDataFlatten = flattenObj(electricData);
// console.log(electricDataFlatten);

const electricDataQueryObj = new QueryObj(electricDataFlatten);
console.log(electricDataQueryObj.getValue('Current'))
console.log(electricDataQueryObj.getHighestObjByKey('Current'))
console.log(electricDataQueryObj.getLowestObjByKey('Current'))
console.log(electricDataQueryObj.getHighestValueByKey('Current'))
console.log(electricDataQueryObj.getLowestValueByKey('Current'))

// console.log(electricDataQueryObj.sortObj("Power Factor"))

// const newElectricDataQueryObj = new QueryObj(electricDataQueryObj.sortObj("Current"))
// console.log(newElectricDataQueryObj.getValue("Current"))
