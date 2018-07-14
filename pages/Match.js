import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const dimensions = Dimensions.get('window');

const Match = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{
                margin: 0,
                padding: 0,
                top: 0,
                width: dimensions.width,
                height: dimensions.height / 2,
                }}
                resizeMode='cover'
                source={{
                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                }}
            />
            <View style={styles.descriptionBlock}>
                <View style={styles.personBlock}>
                    <Text style={styles.text}>Kirill Orlovsky, 20</Text>
                </View>
                <View style={styles.actionBlock}>
                    <TouchableOpacity  style={styles.button} onPress={() => alert('ghgj')}><Text style={styles.actionText}>Like</Text></TouchableOpacity>
                    <TouchableOpacity  style={styles.button} onPress={() => null}><Text style={styles.actionText}>X</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
    },
    personBlock: {
        height: dimensions.height / 4,
        paddingTop: 40,
    },
    actionBlock:  {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: dimensions.height / 4,
    }, 
    button: {
        borderRadius: 160,
        marginLeft: 40,
        marginRight: 40,
        width: 40,
        height: 100,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#d93b5f',
        backgroundColor: '#d93b5f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
    actionText: {
        fontSize: 30,
        color: 'white',
    },
    descriptionBlock: {
        borderTopColor: 'gray',
        borderTopWidth: 2,
        height: dimensions.height / 2,
        width: dimensions.width,
    }
  });


export default Match;