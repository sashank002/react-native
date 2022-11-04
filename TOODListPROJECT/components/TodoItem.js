/* eslint-disable prettier/prettier */

import React from 'react';
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
    , TouchableOpacity
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const TodoItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity onPress={() => deleteItem(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        // backgroundColor: '#000000',
        // color: 'white',
        padding: 16,
        margin: 16,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,

    }
});

export default TodoItem;