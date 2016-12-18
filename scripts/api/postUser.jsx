define(function (require) {
  return {
    request(url, user) {
      const form = require('api/form');

      return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form.encode({
          name:'5262',
          adminType:'false',
          phone:'+213',
          password:'sdas',
        })
      }).then(response => response.json())
    }
  }
})
