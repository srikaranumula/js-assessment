if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function () {
	return {
		indexOf : function (arr, item) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					return i;
				}
			}
			return -1;
		},

		sum : function (arr) {
			var sum = 0;
			for (var i = 0; i < arr.length; i++) {
				sum += arr[i];
			}
			return sum;
		},

		remove : function (arr, item) {
			var newArr = [];
			for (var i = 0, len = arr.length; i < len; i++) {
				if (arr[i] !== item) {
					newArr.push(arr[i]);
				}
			}
			return newArr;
		},

		removeWithoutCopy : function (arr, item) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					arr.splice(i, 1);
					i--;
				}
			}
			return arr;
		},

		append : function (arr, item) {
			arr.push(item);
			return arr;
		},

		truncate : function (arr) {
			arr.pop();
			return arr;
		},

		prepend : function (arr, item) {
			arr.unshift(item);
			return arr;
		},

		curtail : function (arr) {
			arr.shift();
			return arr;
		},

		concat : function (arr1, arr2) {
			return arr1.concat(arr2);
		},

		insert : function (arr, item, index) {
			arr.splice(index, 0, item);
			return arr;
		},

		count : function (arr, item) {
			var c = 0;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					c++;
				}
			}
			return c;
		},

		duplicates : function (arr) {
			var obj = {},
			dupArr = [];
			for (var i = 0; i < arr.length; i++) {
				var item = arr[i];
				if (obj[item]) {
					obj[item] = obj[item] + 1;
				} else {
					obj[item] = 1;
				}
			}

			for (var item in obj) {
				if (obj.hasOwnProperty(item) && obj[item] > 1) {
					dupArr.push(item);
				}
			}
			return dupArr;
		},

		square : function (arr) {
			var newArr = [];
			for (var i = 0; i < arr.length; i++) {
				newArr.push(Math.pow(arr[i], 2));
			}
			return newArr;
		},

		findAllOccurrences : function (arr, target) {
			var newArr = [];

			for (var i = 0, len = arr.length; i < len; i++) {
				if (arr[i] === target) {
					newArr.push(i);
				}
			}

			return newArr;
		}
	};
});
