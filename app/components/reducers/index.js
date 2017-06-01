import { combineReducers } from 'redux';

import EmployeesReducer from './employeesReducer';
import DataReducer from './dataReducer';

export default combineReducers({
	employees: EmployeesReducer,
	dataReducer: DataReducer
})

