;(function () {
	Array.prototype.sortByObjProp = function (property) {
		this.sort(function(a, b) {
			var textA = a[property];
			var textB = b[property];
			if(typeof a === "string") {
				textA.toUpperCase();
				textB.toUpperCase();
			}
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
	}
})();
