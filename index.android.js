/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';
import {
  Navigator,
  StackNavigator
} from 'react-navigation';
// crear barra de navegacion

const MainScreen = require('./app/components/MainScreen');
const Dashboard = require('./app/components/dashboard/dashboard');
import EmployeeRegister from './app/components/employees/employeesRegister';

const App = StackNavigator({
  Main: { screen: MainScreen },
  Dashboard: { screen: Dashboard }
}, {
  initialRouteName: 'Main'
});

class empleado extends Component {
  // a mostrar todo los que este en pantalla :v
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <EmployeeRegister/>
    );
  }
}
/*
let NavigatorBarRouterMap = {
  LeftButton: function(route, navigator, index){
    if(route.name == 'MainScreen' || route.name == 'Dashboard'){
      return null;
    }
    return (
      <TouchableHighlight underlayColor='gba(0,0,0,0)' onPress={()=>{
        if(index > 0){
          navigator.pop();
        }
       }}>
         <Text style={{marginTop: 10, marginLeft:20, color:'#e3e3e3'}}>Atras</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route){
    return null;
  },
  Title: function(route){
    if(route.name == 'MainScreen' || route.name == 'Dashboard'){
      return null;
    }
    return (<Text style={{marginTop: 10, color:'#e3e3e3', fontWeight: 'bold' }}>{route.name}</Text>)
  }
}

const MainScreen = require('./app/components/MainScreen');

export default class empleado extends Component {
  // se implementa la navegacion
  renderScene(route, navigator){
    switch (route.name) {
      case 'MainScreen':
        return (
          <MainScreen {...route.props} navigator={navigator} route={route}/>
        );
      case 'Dashboard':
        return (
          <Dashboard {...route.props} navigator={navigator} route={route}/>
        );
      // sin esto no se puede acceder a los detalles
      case 'Details':
        return (
          <Details {...route.props} navigator={navigator} route={route}/>
        );
    }
  }
  // a mostrar todo los que este en pantalla :v
  render() {
    return (
      <Navigator style={styles.bar}
        initialRoute={{name: 'MainScreen'}}
        renderScene={this.renderScene}
        configureScene={(route)=>{ // configureScene ? configureScene : Navigator.SceneConfigs.FloatFromRight
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMap} />
        }
      />
    );
  }
}
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
    }
});

AppRegistry.registerComponent('empleado', () => empleado);

// rutas y datos
/*
route_api: { empleados-app.herokuapp.com },
data: {
  firstname: String,
  lastname: String,
  photo: String,
  latitude: String,
  longitude: String
}
mean_routes_api:{
  POST && GET: empleados-app.herokuapp.com/api/empleado,
  PUT && DELETE: empleados-app.herokuapp.com/api/empleado/:id_empleado
}
*/

