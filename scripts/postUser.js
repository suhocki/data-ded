'use strict';

define({
  request: function request(url, form) {
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: form
    }).then(function (response) {
      return response.json();
    });
  }
});
//# sourceMappingURL=D:\client\postUser.js.map