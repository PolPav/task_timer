import {combineReducers} from 'redux';
import TaskReducer from './tasks';

const allReducers = combineReducers({

  tasks: TaskReducer,

});

export default allReducers;
