import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

//import { createBrowserHistory } from 'history'

//import createBrowserHistory from 'history/createBrowserHistory'
//import Routes from './routes';
//const browserHistory = createBrowserHistory();
//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
