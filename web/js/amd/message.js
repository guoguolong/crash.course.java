define(['md5'], function(require, md5) {
  console.log('AMD:: message.js module initialized')
  return {
    getHello: function() {
      return 'message.getHello()';
    }
  };
});

// // 与上面等价
// define(function(require) {
//   console.log('AMD:: message.js initialized')
//   var md5 = require('md5');
//   return {
//     getHello: function() {
//       return 'message.getHello()';
//     }
//   };
// });