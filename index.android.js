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
  View, Navigator, TouchableHighlight
} from 'react-native';

export default class empleado extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hello world bitch >:v
        </Text>
      </View>
    );
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

