'use strict';

define({
  request: function request(url) {
    return fetch(url, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    });
  }
});
//# sourceMappingURL=D:\client\api\getUsers.js.map