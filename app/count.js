if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function () {
	return {
		count : function (start, end) {
			var timeoutRef;
			function step() {
				console.log(start++); // eslint-disable-line no-console

				if (start <= end) {
					timeoutRef = setTimeout(step, 100);
				}
			}

			step();

			return {
				cancel : function () {
					timeoutRef && clearTimeout(timeoutRef);
				}
			};
		}
	};
});
