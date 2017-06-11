import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class ModalView extends Component{
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
  render(){
    return(
      <View style={{marginTop: 22}}>
        <Modal animationType={ 'slide' } transparent={ false } visible={this.state.modalVisible} onRequestClose={()=>{ alert('modal has been closed') }}>
          <View> style={{marginTop: 22}}
            <View>
              <Text>Hola mundo</Text>
              <TouchableHighlight onPress={()=>{ this.setModalVisible(!this.state.modalVisible) }} style={ styles.button }>
                <Text>Hide modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight onPress={ this.setModalVisible(true) } style={ styles.button }>
          <Text>Show data</Text>
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
    },
  button: {
    padding: 15, backgroundColor: '#fed136'
  }
});

export default ModalView;
