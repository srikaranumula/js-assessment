if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        return ('00000000'+(num >>> 0).toString(2)).substr(-8);
    },

    multiply: function(a, b) {
        
    }
  };
});

