/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
// import type {Node} from 'react';
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

const HomeScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 100}}>This is the dashboard screen</Text>
      <Button
        title="click to go to inside screen"
        onPress={() => {
          setCurrent('InsideScreen');
        }}
      />
    </View>
  );
};
