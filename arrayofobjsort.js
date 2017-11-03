;(function () {
	Array.prototype.sortByObjProp = function (property, direction) {
		if (direction && ( direction.toUpperCase() !== 'ASC' && direction.toUpperCase() !== 'DESC' ) ) {
			console.exception("Please pass either 'asc' or 'desc' in as the sort type... if you do not pass either in, sorting will be ASC")
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
