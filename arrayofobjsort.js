;(function () {
	Array.prototype.sortByObjProp = function (property, direction) {
		if (direction && (typeof direction !== 'string' || ( direction.toUpperCase() !== 'ASC' && direction.toUpperCase() !== 'DESC'))) {
			throw new TypeError("Please pass either 'asc' or 'desc' in as the sort type... if you do not pass either in, sorting will be ASC.  'direction' sent in as " + typeof direction + ": " + direction);
		}
		this.sort(function(a, b) {
			var textA = a[property];
			var textB = b[property];
			if(typeof a === "string") {
				textA.toUpperCase();
				textB.toUpperCase();
			}
			if (direction && direction.toUpperCase() === 'DESC') {
				return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
			}
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
	}
})();
