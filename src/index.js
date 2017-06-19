import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Page from './components/page/page';
import CharacterPage from './components/characterPage/characterPage';

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
    <Provider store={ store }>
        <Router history={ history }>
            <App>
                <Route path='/characters' component={ Page } />
                <Route path='/character/:name' component={ CharacterPage } />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
