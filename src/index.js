import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ErrorBoundary from './components/errorBoundary/ErrorBoundary'
// import {Provider} from 'react-redux'

// import store from './store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App/>,
document.getElementById('root')
);

serviceWorker.unregister();