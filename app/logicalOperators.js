if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
        var result = a || b;
        return result
    },

    and : function(a, b) {
        var result = a && b;
        return result
    }
  };
});
