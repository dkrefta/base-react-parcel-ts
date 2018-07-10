import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './containers/App';

import * as serviceWorker from './serviceWorker';

injectGlobal`
*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  background-color: #ecf0f1;
  color: #333;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.25rem;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
