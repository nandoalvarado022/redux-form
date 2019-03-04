import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import customReducer from './reducer'
import { reducer as formReducer } from 'redux-form'

const initialUserState  = {
    name: 'Pablito',
    photo: null
}

const reducers = combineReducers({ 
    customReducer,
    form: formReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;