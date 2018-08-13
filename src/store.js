import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

let reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const devTools = process.env.NODE_ENV === 'development' ?  reduxTools : null

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),        
    )
);

export default store;