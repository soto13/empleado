import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { fetchData } from '../actions';

class EmployeesView extends Component {
	static navigationOptions = {
		title: 'Vista Empleados',
	}
	componentWillMount(){
		this.props.fetchData();
	}
	getEmployees(){
		const { dataEmployees } = this.props;
		return employeesData = dataEmployees.data.map((employee, key) => {
			return <Text key={ key }>{ employee.firstname }</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesView);
