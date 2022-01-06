// Dependecies
import {createStore} from 'redux';

// Reducers
import rootReducer from './reducers';


const store = createStore(rootReducer);
export default store;