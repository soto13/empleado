import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
  Modal,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { fetchData } from '../actions';
import { updateEmployee, deleteEmloyee } from '../api/index'
import ModalView from './modal/modalView';

class EmployeesView extends Component {
	static navigationOptions = {
		title: 'Vista Empleados',
	}
  updateEmployees(employe){
    //
  }
  deleteEmployees(employe){
    //
  }
	componentWillMount(){
		this.props.fetchData();
	}
	getEmployees(){
		const { dataEmployees } = this.props;
		return employeesData = dataEmployees.data.map((employee, key) => {
			return (
				<View key={ key }>
          <TouchableHighlight onPress={()=>{ this.updateEmployees() }} style={ styles.button }>
            <Text>{employee.firstname}</Text>
          </TouchableHighlight>
          <ModalView/>
				</View>
			)
		});
	}
	render(){
		console.log(this.props);
		return (
			<View>
				{ this.props.dataEmployees.isFetching && <Text>loading data</Text> }
				{
					this.props.dataEmployees.data.length ? this.getEmployees() : <Text>no hay nada</Text>
			}
			</View>
		)
	}
}

const mapStateToProps = state => {	
	return { dataEmployees: state.dataReducer }
}

const mapDispatchToProps = (dispatch)=>{
	return {
		fetchData: ()=>{ dispatch(fetchData()) }
	}
}
/**
 *        <Text>{employee.photo}</Text>
					<Text>{ employee.firstname }</Text>
					<Text>{ employee.lastname }</Text>
					<Text>{employee.longitude}</Text>
					<Text>{employee.latitude}</Text>
 */
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
    },
  button: {
    padding: 15, backgroundColor: '#fed136'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesView);
