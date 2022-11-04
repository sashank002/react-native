/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
// import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
    , TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const AddTodo = ({ addItem }) => {

    const [text, setText] = useState('');

    const changeText = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add New Todo Here..😁'
                placeholderTextColor='#1e847f'
                onChangeText={(val) => changeText(val)}
            />
            <Button onPress={() => addItem(text)} title="ADD TODO" color='#1e847f' />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#1e847f',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#1e847f',
        fontSize: 20,

    }
});

export default AddTodo;