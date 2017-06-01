import {
	FETCHIN_DATA,
	FETCHIN_DATA_SUCCESS,
	FETCHIN_DATA_FAILURE
} from '../constants';

import getDataApi from '../api'

export const selected_tab = (tabId) => {
	return {
		type: 'selected_tab',
		payload: tabId
	}
}

export const getData = () => {
	return {
		type: 'FETCHIN_DATA'
	}
}

export const getDataSuccess = (data) => {
	return {
		type: 'FETCHIN_DATA_SUCCESS',
		data
	}
}

export const getDataFailure = () => {
	return {
		type: 'FETCHIN_DATA_FAILURE'
	}
}

export const fetchData = () => {
	return (dispatch)=>{
		dispatch(getData());
		getDataApi()
		.then(([res, json])=>{
			dispatch(getDataSuccess(json));
		})
		.catch((err)=>{
			console.log('ha ocurrido un error:', err);
		})
	}
}
