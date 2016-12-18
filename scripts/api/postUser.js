'use strict';

define(function (require) {
  return {
    request: function request(url, user) {
      var form = require('../api/form');

      return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=windows-1251'
        },
        body: form.encode({
          name: user.name,
          adminType: user.isAdmin,
          phone: user.phone,
          password: user.password
        })
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=D:\client\api\postUser.js.map