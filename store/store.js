import { sessionReducer, listReducer, loaderReducer, editReducer } from './reducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    session: sessionReducer,
    list: listReducer,
    loading: loaderReducer,
    edit: editReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store