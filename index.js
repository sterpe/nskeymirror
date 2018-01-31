module.exports = function (obj, namespace) {
	var o = {};
	if (!(typeof obj === "object" &&
			obj !== null &&
			Object.prototype.toString.call(obj) !==
				'[object Array]')) {
		throw new Error('nsKeyMirror map must be an object!');
	}
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (namespace) {
				o[key] = key + '@' + namespace;
			} else {
				o[key] = key;
			}
		}
	}

	return o;
};
