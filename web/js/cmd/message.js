define(function(require, exports, module) {
  console.log('CMD:: message.js module initialized.')
  var md5 = require('md5');
  module.exports = {
    addListener: function(id) {
      document.getElementById(id).addEventListener('click', function(evt) {
        var hash = require('hash');
        console.log(hash('mypassword'));
      });
    },
    getHello: function() {
      return 'message.getHello()';
    }
  }
});