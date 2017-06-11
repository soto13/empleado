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
import { updateEmployee, deleteEmloyee } from '../api/index';

class EmployeesView extends Component {
	static navigationOptions = {
		title: 'Vista Empleados',
	}
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      modalData: [{_id: '', firstname: '', lastname: '', photo: '', latitude: '', longitude: ''}]
    }
  }
  setModalVisible(visible){
    this.setState({ modalVisible: visible });
  }
  setModalData(employee, key){
    console.log(employee);
    this.setState({ modalData: employee });
  }
  showModal(){
    const employee = this.state.modalData;
    return (
      <View style={{marginTop: 22}}>
        <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible} onRequestClose={()=>{ alert('modal has been closed') }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hola mundo</Text>
              <Text>{employee.photo}</Text>
              <Text>{employee.firstname}</Text>
              <Text>{employee.lastname}</Text>
              <Text>{employee.longitude}</Text>
              <Text>{employee.latitude}</Text>
              <TouchableHighlight onPress={()=>{ this.setModalVisible(!this.state.modalVisible) }} style={ styles.button }>
                <Text>Hide modal</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>{ this.updateEmployees(employee) }} style={ styles.button }>
                <Text>Editar</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>{ this.deleteEmployees(employee) }} style={ styles.button }>
                <Text>Eliminar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight onPress={()=>{ this.setModalVisible(true) }} style={ styles.button }>
          <Text>Show data</Text>
        </TouchableHighlight>
      </View>
    )
  }
  updateEmployees(employee){
    UpdateEmployee = [];
    UpdateEmployee.push(employee);
    console.log(UpdateEmployee);
    updateEmployee(UpdateEmployee);
  }
  deleteEmployees(employee){
    DeleteEmployee = [];
    DeleteEmployee.push(employee)
    console.log(DeleteEmployee);
    deleteEmloyee(DeleteEmployee);
  }
	componentWillMount(){
		this.props.fetchData();
	}
	getEmployees(){
		const { dataEmployees } = this.props;
		return employeesData = dataEmployees.data.map((employee, key) => {
			return (
				<View key={ key }>
          <TouchableHighlight onPress={()=>{ this.setModalData(employee, key) }} style={ styles.button }>
            <Text>{employee.firstname}</Text>
          </TouchableHighlight>
          { this.showModal() }
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
