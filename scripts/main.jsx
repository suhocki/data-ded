define(require => {
  const network = require('network');

  class App extends React.Component {
    render() {
      var contract = this.props.data[0];

      return (
          <span>User: {contract.User.Name}</span>
      )
    }
  };

  network.then(data => {
    ReactDOM.render(
      <App data={data}/>,
      document.getElementById('root')
    )
  })

  new App();
});
