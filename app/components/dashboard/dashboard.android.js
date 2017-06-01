// aqui se mostrarán todos los empleados
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import EmployeesList from '../employees/employeesView';
import configureStore from '../config/configureStore';

let store = configureStore();

class Dashboard extends Component {
	static navigationOptions = {
		title: 'Dashboard',
	}
	render(){
		return (
			<Provider store={store}>
				<View style={ { flex:1 } }>
					<EmployeesList/>
				</View>
			</Provider>
		);
	}
}

module.exports = Dashboard;
