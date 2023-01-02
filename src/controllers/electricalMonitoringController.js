import { electricDataQueryObj, electricDataFlatten } from "../models/electricalMonitoringData";
import { failResponse, successResponse } from "../helpers/helperResponse";

// => http://localhost/value
export const getAllValue = async (request, response) => {
    try {
        const data = electricDataFlatten;
        return successResponse({response, data: data})
    } catch(error) {
        return failResponse({response, data: error})
    }
}

// => http://localhost/value/:key?order=
export const getValue = async (request, response) => {
    const { key } = request.params;
    const { order } = request.query;

    try {
        const data = electricDataQueryObj.getValue(key, order);
        return successResponse({response, data: data})
    } catch(error) {
        return failResponse({response, data: error})
    }
}

// => http://localhost/values?keys=[]&order=&sort=&returnAs=
export const getValues = async (request, response) => {
    const { keys, order, sort, returnAs } = request.query

    try {
        const data = electricDataQueryObj.getValueAll(keys, order, sort, returnAs ?? 'array');
        return successResponse({response, data: data})
    } catch(error) {
        return failResponse({response, data: error})
    }
}

// => http://localhost/value/highest/:key?returnAs=
export const getHighestData = async (request, response) => {
    const { key } = request.params;
    const { returnAs } = request.query

    try {
        if (returnAs === 'string' || returnAs === 'integer' || returnAs === 'only' || returnAs === 'one' || returnAs === 'value') {
            const data = electricDataQueryObj.getHighestValueByKey(key);
            return successResponse({response, data: data})
        } else {
            const data = electricDataQueryObj.getHighestObjByKey(key);
            return successResponse({response, data: data})
        }
    } catch(error) {
        return failResponse({response, data: error})
    }
}

// => http://localhost/value/lowest/:key?returnAs=
export const getLowestData = async (request, response) => {
    const { key } = request.params;
    const { returnAs } = request.query

    try {
        if (returnAs === 'string' || returnAs === 'integer' || returnAs === 'only' || returnAs === 'one' || returnAs === 'value') {
            const data = electricDataQueryObj.getLowestValueByKey(key);
            return successResponse({response, data: data})
        } else {
            const data = electricDataQueryObj.getLowestObjByKey(key);
            return successResponse({response, data: data})
        }
    } catch(error) {
        return failResponse({response, data: error})
    }
}
