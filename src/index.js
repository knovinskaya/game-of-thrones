import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Page from './components/page/page';
import CharacterPage from './components/characterPage/characterPage';

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
        <Router history={browserHistory}>
            <Route path='/' component={ App }>
                <IndexRoute component={ Page } />
                <Route path='/character/:name' component={ CharacterPage } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
