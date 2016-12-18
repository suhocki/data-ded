define( {
  request(url, user) {
console.log(user);
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: JSON.stringify({
      //   AdminType: user.isAdmin,
      //   Name: user.name,
      //   Phone: user.phone,
      //   Password: user.password,
      // })
      body: JSON.stringify({
        name:'5262',
        adminType:'false',
        phone:'+213',
        password:'sdas',
      })
    }).then(response => response.json())
  }
})
