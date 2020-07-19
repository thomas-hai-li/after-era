import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

import './i18next';

ReactDOM.render(
  <Suspense fallback={(<div>~~ Loading ~~</div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
