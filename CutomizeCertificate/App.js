/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>
          Certificate will get auto generated on participants profile page
        </Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textHead}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="CS GO Match Challenge"
          placeholderTextColor="#C0C8E7"
        />
        <Text style={styles.textHead}>Position in Organization</Text>
        <TextInput
          style={styles.textInput}
          placeholder="I am CEO"
          placeholderTextColor="#C0C8E7"
        />
        <TouchableOpacity style={styles.chooseBtn}>
          <Text style={styles.btnText}>Choose Signature</Text>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textHead}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="CS GO Match Challenge"
          placeholderTextColor="#C0C8E7"
        />
        <Text style={styles.textHead}>Position in Organization</Text>
        <TextInput
          style={styles.textInput}
          placeholder="I am CEO"
          placeholderTextColor="#C0C8E7"
        />
        <TouchableOpacity style={styles.chooseBtn}>
          <Text style={styles.btnText}>Choose Signature</Text>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText2}>Save Details</Text>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText2}>Sample Preview</Text>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F8FF',
    height: Winheight,
  },
  view1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    color: '#71798D',
    fontSize: 12,
    width: Winwidth * 0.7,
    // borderWidth: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  view2: {
    // borderWidth: 1,
    width: Winwidth * 0.9,
    alignSelf: 'center',
  },
  textHead: {
    color: '#050152',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 7,
  },
  textInput: {
    // borderWidth: 1,
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 10.87,
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  chooseBtn: {
    width: 126,
    height: 30,
    backgroundColor: '#10336B',
    borderRadius: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  view3: {
    width: Winwidth * 0.9,
    // alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  saveBtn: {
    width: 147,
    height: 48,
    backgroundColor: '#2574A9',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText2: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
});

export default App;
