import {
	FETCHIN_DATA,
	FETCHIN_DATA_SUCCESS,
	FETCHIN_DATA_FAILURE
} from '../constants';

const initialState = {
	data: [],
	isFetching: false,
	error: false
}

export default dataReducer = (state = initialState, action)=>{
	switch (action.type) {
		case FETCHIN_DATA:
			return {
				...state,
				data: [],
				isFetching: true
			}
		
		case FETCHIN_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false
			}
		case FETCHIN_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true
			}
		default:
			return state
	}
}
