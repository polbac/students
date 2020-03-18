import { sessionReducer, listReducer, loaderReducer, editReducer, optionsReducer, mainErrorReducer } from './reducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    session: sessionReducer,
    list: listReducer,
    loading: loaderReducer,
    edit: editReducer,
    options: optionsReducer,
    mainError: mainErrorReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store