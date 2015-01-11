(function(){

   "use strict";

   var libPrefix = process.env.COVER ? './lib-cov' : './lib';

   module.exports = {
      compare: require(libPrefix + '/compare'),
      XMLSerializer: require(libPrefix + '/canonizer'),
      revXPath: require(libPrefix + '/revxpath'),
      GroupingReporter: require(libPrefix + '/reporters/groupingReporter.js'),
      comparators: {
         jsonComparator: require(libPrefix + '/comparators/jsonComparator.js')
      }
   };

})();