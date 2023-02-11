import {createStore, applyMiddleware, compose} from 'redux';
import reducer  from './reducer';
import  ThunkMiddleware  from 'redux-thunk';

//esta linea nos permite conectarnos con la extension del navegador => REDUX DEVTOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))//esta linea es para poder hacer peticiones a un server
)

export default store;