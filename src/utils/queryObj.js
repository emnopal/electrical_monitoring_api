export class QueryObj {
	constructor(obj) {
		this.obj = obj;
	}

	/*
	Get the key of object, only works if you don't convert firebase database to array
	*/
	getKeys() {
		if (Array.isArray(this.obj)) {
			throw "Must be Object";
		}
		return Object.keys(this.obj);
	}

	/*
	Only get one value
	*/
	getValue(key, order) {
        let sortedObj = this.obj;
		if (Array.isArray(sortedObj)) {
			sortedObj = this.sortObj(key, order);
			return sortedObj.map((a) => a[key]);
		}
		return Object.values(sortedObj).map((a) => a[key]);
	}

	/*
	Can get multiple value and return as object
	*/
	getValueObj(keys, orderBy, orderSort) {
		return this.getValueAll(keys, orderBy, orderSort);
	}

	/*
	Can get multiple value and return as array
	*/
	getValueArr(keys, orderBy, orderSort) {
		return this.getValueAll(keys, orderBy, orderSort, "array");
	}

	/*
	Get value function wrapper
	*/
	getValueAll(keys, orderBy, orderSort, returnAs) {
		let isStr = 0;
		if (typeof keys === 'string' || keys instanceof String) {
			keys = [keys]
			isStr = 1;
		}
		const data = this.sortObj(orderBy ?? "timestamp", orderSort);
		if (returnAs === 'array') {
			const result = data.map((d) => {
				return keys.map((k) => {
					return d[k];
				});
			});
			if (isStr === 1) {
				return result.flat(1);
			}
			return result;
		}
		return data.map((d) => {
			const result = {}
			keys.map((k) => {
				result[k] = d[k];
			});
			return result;
		});
	}

	sortObj(key, order) {
		const data = this.obj;
		let x_mult = 1; let y_mult = -1;
        if (!Array.isArray(data)) throw "Must be Array";
		if (order === "desc") {
			x_mult = -1; y_mult = 1;
		}
		return data.sort((a, b) => a[key] < b[key] ? x_mult : y_mult);
	}

    getHighestObjByKey(key) {
        return this.sortObj(key).at(-1);
    }

    getLowestObjByKey(key) {
        return this.sortObj(key, "desc").at(-1);
    }

    getHighestValueByKey(key) {
        return this.getHighestObjByKey(key)[key];
    }

    getLowestValueByKey(key) {
        return this.getLowestObjByKey(key)[key];
    }

}