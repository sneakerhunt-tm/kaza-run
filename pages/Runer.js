import React from 'react';
import { View, Text } from 'react-native';

const Runer = ({ match }) => {
    const id = match.params.id;

    return (
        <View><Text>Runner {id}</Text></View>
    )
}

export default Runer;