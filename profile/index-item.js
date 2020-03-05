import React from 'react';
import { Text, View } from 'react-native';

export default function indexItem({ data }) {

    return (
        <View>
            <Text>{`Name: ${data.name}`}</Text>
            <Text>{`Tuoi: ${data.age}`}</Text>
        </View>
    );
}