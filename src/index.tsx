import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Pages/Hello';

ReactDOM.render(<Hello />, document.getElementById('root'));

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
