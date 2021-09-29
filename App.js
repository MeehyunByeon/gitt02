/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput, Image } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg';
import Modal from './src/modal';

class App extends Component {

  state = {
    myTextInput: '',
    alphabet: ['a','b','c','d']
  }

  onChangeText = (event) => {
    this.setState({
        myTextInput: event
    })
  }
  
  onAddTextInput = () => {
    this.setState(prevState=>{
      return{
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    }

    )}

  render() {
    return (
      <View style={styles.mainView}>
        <Modal/>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView1: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  subView2: {
    flex: 2,
    backgroundColor: 'red',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  },
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: 700
  
  }
})

export default App;
