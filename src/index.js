import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const initialState = {
    app: {
        currentPage: {
            number: 1
        }
    }
};

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
