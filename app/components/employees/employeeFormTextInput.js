import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

import { createStore } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { newEmployee } from '../api';

class EmployeeFormTextInput extends Component{
	componentWillMount(){
    this.props.fetchData();
  }
	
	getEmployees(){
		const { dataEmployees } = this.props;
		return employeesData = dataEmployees.data.map((employee, key) => {
			console.log(employee, key);
		});
	}
	changeFirstname(firstname){
		this.setState({firstname});
	}
	changeLastname(lastname){
		this.setState({lastname});
	}
	changePhoto(photo){
		this.setState({photo});
	}
	changeLongitude(longitude){
		this.setState({longitude});
	}
	changeLatitude(latitude){
		this.setState({latitude});
	}
	buttonPressed(){
		if(this.state.firstname && this.state.lastname){
			const arrayData = [];
			const data = {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				photo: this.state.photo,
				longitude: this.state.longitude,
				latitude: this.state.latitude
			}
			arrayData.push(data);
			console.log('hola:', arrayData)
			newEmployee(arrayData);
		}else{ Alert.alert('error'); }
	}
	render(){
		return (
      <View>
				{ this.props.dataEmployees.isFetching && <Text>loading data</Text> }
        <Text>Hola desde registrar</Text>
        <Text>Nombre</Text>
        <TextInput placeholder='Nombre' onChangeText={(firstname) => this.changeFirstname(firstname)}/>
        <Text>Apellido</Text>
        <TextInput placeholder='Apellido' onChangeText={(lastname) => this.changeLastname(lastname)}/>
        <Text>Foto prueba</Text>
        <TextInput placeholder='Foto' onChangeText={(photo) => this.changePhoto(photo)}/>
        <Text>longitud</Text>
        <TextInput placeholder='Longitud' onChangeText={(longitude) => this.changeLongitude(longitude)}/>
        <Text>latitud</Text>
        <TextInput placeholder='Latitud' onChangeText={(latitude) => this.changeLatitude(latitude)}/>
        <TouchableHighlight style={{padding: 15, backgroundColor: '#fed136'}} onPress={ () => this.buttonPressed() }>
          <Text style={styles.welcome}>Enviar</Text>
        </TouchableHighlight>
      </View>
		)
	}
}

const mapStateToProps = (state)=>{
  return { dataEmployees: state.dataReducer }
}
const mapDispatchProps = (dispatch)=>{
  return { fetchData: ()=>{ dispatch(fetchData()) } }
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

export default connect(mapStateToProps, mapDispatchProps)(EmployeeFormTextInput);