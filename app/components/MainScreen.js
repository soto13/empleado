// va a ser la pagina inicial que ira a lo principal del la app
import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	TextInput,
	TouchableHighlight,
	Alert,
	StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreen extends Component {
	
	static navigationOptions = {
		title: 'Main Screen',
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Estas en el main de la app</Text>
				<View>
					<TouchableHighlight onPress={(this.insert.bind(this))} style={styles.boton}>
						<Text style={styles.textoBoton}>Insertar</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}

	insert(){
		Alert.alert(
			'Acceso',
			'Ya estas dentro',
			[
				{
					text: 'registrar',
					onPress: (this.registrar.bind(this))
				}, {
					text: 'listar',
					onPress: (this.listar.bind(this))
				}
			]
		)
	}
	registrar(){
		this.props.navigator.replace({
			title: 'Dashboard',
			name: 'Dashboard',
			passProps: {}
		})
	}
	listar(){
		this.props.navigator.replace({
			title: 'employeeRegister',
			name: 'empleyeeRegister',
			passProps: {}
		})
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		height: null,
		alignItems: 'stretch',
		padding: 30
	},
	title: {
        marginTop: 250,
        fontSize: 35,
        marginBottom: 10,
        backgroundColor: 'rgba(52,52,52,0)',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    boton: {
        height: 45,
        backgroundColor: 'skyblue',
        borderWidth: 4,
        borderColor: '#ffffff',
        borderRadius: 5,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18
    }
})

module.exports = MainScreen;
