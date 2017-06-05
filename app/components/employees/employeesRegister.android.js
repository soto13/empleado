import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	Button,
	TextInput,
	StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { newEmployee } from '../api';

import { Provider } from 'react-redux';
import configureStore from '../config/configureStore';
import EmployeeFormTextInput from './employeeFormTextInput'

let store = configureStore();

class EmployeesRegister extends Component {
	static navigationOptions = {
		title: 'Registrar Empleados'
	}
	render(){
		return (
			<Provider store={store} style={styles.container}>
				<EmployeeFormTextInput/>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bar: {
        backgroundColor: '#2c2c2d',
    }
});

// <Button title='Enviar' onPress={ newEmployee(this.props) } accessibilityLabel='vamos a ver que pasa'/>
export default EmployeesRegister;