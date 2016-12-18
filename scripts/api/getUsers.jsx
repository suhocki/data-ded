define({
  request(url) {
    return fetch(url, {
      method: 'get'
    }).then(response => response.json())
  }

})
