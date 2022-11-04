/* eslint-disable prettier/prettier */

import React from 'react';
// import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useEffect } from 'react';

const Home = (props) => {

    useEffect(() => {
        console.log("props", props);
    })

    return (
        <View>
            <Text style={{ color: "white", fontSize: 100 }}>
                {/* Home Component  */}
                {props.data}
            </Text>
        </View>
    )
}


export default Home;