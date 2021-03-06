/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
        // onPress={()=>alert('hello wolrd')}
        // onLongPress={()=>alert('hello wolrd')}
        // onPressIn={()=>alert('hello wolrd')}
        onPressOut={()=>alert('hello wolrd')}
>
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
    
    
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;
