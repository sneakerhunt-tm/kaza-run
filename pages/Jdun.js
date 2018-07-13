import React from 'react';
import { View, Text } from 'react-native';

const Jdun = ({ match }) => {
    const id = match.params.id;

    return (
        <View><Text>Jdun {id}</Text></View>
    )
}

export default Jdun;