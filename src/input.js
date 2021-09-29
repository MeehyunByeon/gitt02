/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';


class Input extends Component {

    state = {
        myTextInput: ''
    }

    onChangeText = (event) => {
        this.setState({
            myTextInput: event
        })
    }

  render() {
    return (
        <View style={styles.mainView}>
            <TextInput
        value={this.state.myTextInput}
        style={styles.input}
        onChangeText={this.onChangeText}
        multiline={true}
        maxLength={100}
        autoCapitalize={'none'}
        editable={true}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    mainView: {
      width: '100%'  
    },
    
    
})

export default Input;
