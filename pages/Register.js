import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

//const {width, height} = Dimension.get('window');

const Register = () => {
    const login = () => {
        alert('idi nahoooooooooi' + this.text)
    }
    return (
        <View>
            <Text style={styles.text}>Register</Text>
            <TextInput placeholder='name' onChangeText={(e)=>{this.text = e}} style={styles.textInput}/> 
            <TextInput placeholder='age' style={styles.textInput}/>
            <Button onPress={login} color='#24ad2e' style={styles.button} title='Log In' />    
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30, 
        marginBottom: 20,
    },
    textInput: {
        width: 240,
        height: 40,
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'green'
    }
  });

export default Register;