export class QueryObj {
	constructor(obj) {
		this.obj = obj;
	}

	getKeys() {
		if (Array.isArray(this.obj)) {
			throw "Must be Object";
		}
		return Object.keys(this.obj);
	}

	getValue(key, order) {
        let sortedObj = this.obj;
		if (Array.isArray(sortedObj)) {
            if (order) {
                sortedObj = this.sortObj(key, order);
            }
			return sortedObj.map((a) => a[key]);
		}
		return Object.values(sortedObj).map((a) => a[key]);
	}

	sortObj(key, order) {
		const data = this.obj;
		let x_mult = 1; let y_mult = -1;
        if (!Array.isArray(data)) throw "Must be Array";
		if (order === "desc") {
			x_mult = -1; y_mult = 1;
		}
		return data.sort((a, b) => x_mult * a[key] + y_mult * b[key]);
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
