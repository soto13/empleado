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

class EmployeesRegister extends Component {
	static navigationOptions = {
		title: 'Registrar Empleados'
	}
	constructor(props){
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			photo: '',
			longitude: '',
			latitude: ''
		}
	}
	render(){
		return (
			<View>
				<Text>Hola desde registrar</Text>
				<Text>Nombre</Text>
				<TextInput onChangeText={(firstname)=>this.setState({firstname})} placeholder={'firstname'}/>
				<Text>Apellido</Text>
				<TextInput onChangeText={(lastname)=>this.setState({lastname})} placeholder={'lastname'}/>
				<Text>Foto prueba</Text>
				<TextInput onChangeText={(photo)=>this.setState({photo})} placeholder={'photo'}/>
				<Text>longitud</Text>
				<TextInput onChangeText={(longitude)=>this.setState({longitude})} placeholder={'longitude'}/>
				<Text>latitud</Text>
				<TextInput onChangeText={(latitude)=>this.setState({latitude})} placeholder={'latitude'}/>
				<TextInput placeholder='Latitud'/>
					<TouchableHighlight style={{padding: 15, backgroundColor: '#fed136'}}>
						<Text style={styles.welcome}>Enviar</Text>
					</TouchableHighlight>
			</View>
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

export default EmployeesRegister;
