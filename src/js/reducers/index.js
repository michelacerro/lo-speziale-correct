// Dependencies
import {combineReducers} from 'redux';

// Reducers
import formReducer from './form';
import filtersReducer from './filters';


const rootReducer = combineReducers({
    formReducer,
    filtersReducer
});
export default rootReducer;