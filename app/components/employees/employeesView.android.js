import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import fetchData from '../actions';

class EmployeesView extends Component {
	getEmployees(){
		const { employees } = this.props;
		return employeesData = employees.map((employee, key) => {
			return <Text key={ key }>{ employee.firstname }</Text>
		});
	}
	render(){
		console.log(this.props);
		return (
			<View>{ this.getEmployees() }</View>
		)
	}
}

const mapStateToProps = state => {
	return { employees: state.employees }
}

const mapDispatchToProps = (dispatch)=>{
	return {
		fetchData: ()=>{ dispatch.fetchData }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesView);
