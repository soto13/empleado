// aqui se mostrarán todos los empleados
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from '../reducers';
import EmployeesList from '../employees/employeesView';

import { StackNavigator } from 'react-navigation'

class Dashboard extends Component {
	static navigationOptions = {
		title: 'Dashboard',
	}
	render(){
		return (
			<Provider store={createStore(Reducers)}>
				<View>
					<EmployeesList/>
				</View>
			</Provider>
		);
	}
}

module.exports = Dashboard;
