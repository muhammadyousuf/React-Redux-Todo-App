import {combineReducers} from 'redux';
import AuthReducer from './Reducer/AuthReducer';
import Todos from './Reducer/TodoReducer';

export default combineReducers({
    AuthReducer,
    Todos
})
