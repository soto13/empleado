import { combineReducers } from 'redux';

import EmployeesReducer from './employeesReducer';
import dataReducer from './dataReducer';

export default combineReducers({
	employees: EmployeesReducer,
	dataReducer: dataReducer
})

