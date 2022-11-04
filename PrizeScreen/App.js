/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.prizeHead}>
        <Image style={styles.img} source={require('./images/trophy.png')} />
        <Text style={styles.headText}>Prizes</Text>
      </View>
      <View style={[styles.prizeView, styles.shadowProp]}>
        <Text style={styles.text1}>1st Price</Text>
        <Text style={styles.text2}>Securing 1st prize will get you this</Text>
      </View>
      <View style={[styles.prizeView, styles.shadowProp]}>
        <Text style={styles.text1}>2nd Price</Text>
        <Text style={styles.text2}>Securing 1st prize will get you this</Text>
      </View>
      <View style={[styles.prizeView, styles.shadowProp]}>
        <Text style={styles.text1}>3rd Price</Text>
        <Text style={styles.text2}>Securing 1st prize will get you this</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F8FF',
    height: Winheight,
  },
  prizeHead: {
    width: Winwidth * 0.9,
    borderBottomColor: '#2574A9',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  img: {
    width: 27,
    height: 32,
  },
  headText: {
    color: '#050152',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 10,
  },
  prizeView: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 7,
    width: Winwidth * 0.9,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text1: {
    color: '#050152',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 5,
  },
  text2: {
    color: '#71798D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default App;
