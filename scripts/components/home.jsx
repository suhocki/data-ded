requirejs.config({
  paths: {
    'react': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react',
      'libs/react.min'
    ],
    'react-dom': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min',
      'libs/react-dom.min'
    ],
    'react-router': [
      'https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min',
      'libs/ReactRouter.min'
    ],
    'components': 'dist/components'
  }
});

define(require => {
  const element = <h1>Hello, world</h1>;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  });
