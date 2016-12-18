'use strict';

define(function (require) {
  return {
    request: function request(url, user) {
      var form = require('api/form');

      return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form.encode({
          name: '5262',
          adminType: 'false',
          phone: '+213',
          password: 'sdas'
        })
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Desktop\data-ded-master\scripts\api\postUser.js.map