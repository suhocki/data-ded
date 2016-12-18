define(require => {
  const getUsers = require('api/getUsers');
  const postUser = require('api/postUser');
  var user = {
    name: '',
    isAdmin: '',
    password: '',
    phone: '',
  }

  class UserAdd extends React.Component {

    onNameChange (event) {
      event.preventDefault()
      user.name = event.target.value;
    }

    onIsAdminChange (event) {
      event.preventDefault()
      user.isAdmin = event.target.value;
    }

    onPasswordChange (event) {
      event.preventDefault()
      user.password = event.target.value;
    }

    onPhoneChange (event) {
      event.preventDefault()
      user.phone = event.target.value;
    }

    onSubmit(event) {
      postUser.request('http://localhost:15234/api/users',user).then(data => {
        console.log(data);
      })
    }

    render() {
      var users = this.props.data;

      return (
        <div>
          <p>Добавление пользователя</p>
          <span>User: {users[users.length-1].Name}</span>
          <form className="userAdd">
            <p><input
              type="tel"
              placeholder="Телефон"
              onChange={this.onPhoneChange}/>
            </p>
            <p><input
              type="password"
              placeholder="Пароль"
              onChange={this.onPasswordChange}/>
            </p>
            <p><input
              type="text"
              placeholder="Имя"
              onChange={this.onNameChange}/>
            </p>
            <p><input
              type="text"
              placeholder="Администратор?"
              onChange={this.onIsAdminChange}/>
            </p>
            <input
              type="button"
              value="Добавить"
              onClick={this.onSubmit}/>
          </form>
        </div>
)
}
};

getUsers.request('http://localhost:15234/api/users').then(data => {
  ReactDOM.render(
    <UserAdd data={data}/>,
    document.getElementById('root')
  )
})

new UserAdd();
});
