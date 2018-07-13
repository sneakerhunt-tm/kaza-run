import React from 'react';
import { View, Text } from 'react-native';

const MatchSucces = ({ match }) => {
    const id = match.params.id;
    return (
        <View><Text>MatchSucces{id}</Text></View>
    )
}

export default MatchSucces;