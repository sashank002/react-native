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

import FirstScreen from './components/First';

const App = () => {
  const [current, setCurrent] = useState('DashboardScreen');

  const DashboardScreen = (
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

  const InsideScreen = <FirstScreen />;

  return current === 'DashboardScreen' ? DashboardScreen : InsideScreen;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
