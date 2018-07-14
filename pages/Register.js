import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet, Button, Image, Radio } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import SwitchSelector from 'react-native-switch-selector';
import { createUser } from '../store/userId/actions';

const Register = (props) => {
    const { dispatch, history } = props;

    const model = {
        fullName: null,
        age: null,
        gender: 0,
        role: 0,
        img: null,
    };

    const gender = [
        {label: 'Male', value: 0},
        {label: 'Female', value: 1},
        {label: 'Genderqueer', value: 2},
    ]

    const role = [
        {label: 'Runner', value: 0},
        {label: 'Waiter', value: 1},
    ]
    const login = () => {
        createUser(dispatch, model).then(() => {
            history.push('matches');
        });
    }



    return (
        <View>
            <Text style={styles.text}>Registration</Text>
            <View style={styles.imageBlock}>
            <PhotoUpload 
                onPhotoSelect={avatar => avatar ? model.img = avatar : null}
            >
                <Image
                    style={{
                    paddingVertical: 5,
                    margin: 0,
                    padding: 0,
                    width: 150,
                    height: 150,
                    borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                    }}
                />
            </PhotoUpload>
            </View>
            <TextInput placeholder='name' onChangeText={value => model.fullName = value} style={styles.textInput}/> 
            <TextInput placeholder='age' onChangeText={value => model.age = value} style={styles.textInput}/>
            <View style={styles.switchBlock}>
                <SwitchSelector options={gender} buttonColor={'#d8b4d9'} initial={0} onPress={value => model.gender = value} />
            </View>
            <View style={styles.switchBlock}>
                <SwitchSelector options={role} buttonColor={'#43597d'} initial={0} onPress={value => model.role = value} />
            </View>
            <Button onPress={login} color='#47a893' style={styles.button} title='Sign In' /> 
        </View>
    )
}

const styles = StyleSheet.create({
    switchBlock: {
        marginBottom: 30, 
    },
    imageBlock: {
        marginTop: 40,
        padding: 0,
        height: 150,
        marginBottom: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
    textInput: {
        width: 240,
        height: 40,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'green'
    }
  });

export default connect((state) => { return {} },)(Register);