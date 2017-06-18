import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import promiseMiddleware from 'redux-promise';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(promiseMiddleware) );
}