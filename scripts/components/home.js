'use strict';

requirejs.config({
  paths: {
    'react': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react', 'libs/react.min'],
    'react-dom': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min', 'libs/react-dom.min'],
    'react-router': ['https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min', 'libs/ReactRouter.min'],
    'components': 'dist/components'
  }
});

define(function (require) {
  var element = React.createElement(
    'h1',
    null,
    'Hello, world'
  );
  ReactDOM.render(element, document.getElementById('root'));
});
//# sourceMappingURL=D:\client\components\home.js.map