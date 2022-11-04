/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  TextInput,
  Button,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      email: 'dean@gmail.com',
      pass: "dean",
    };
  }

  async apiCall() {

    const body = {
      "email": "dean@gmail.com",
      "password": "dean"
    };
    const response = await fetch("https://contest-test-2.herokuapp.com/user/login", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const myresponse = await response.json();
      console.log("response", JSON.stringify(myresponse));
      console.log(JSON.stringify(myresponse));
      this.setState({ name: [myresponse] });
      console.log(this.state.name[0].message);
      alert("success" + "\n" + this.state.email + "\n" + this.state.pass);
    }
    else {
      const myresponse = await response.json();
      console.log(myresponse.message);

      if (myresponse.message == "INVALID PASSWORD") {
        alert("WRONG PASSWORD");
      }
      else {
        alert("USER NOT FOUND");
      }
    }


  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput placeholder='email@gmail.com'
            placeholderTextColor='#606060FF'
            style={styles.input1} />
          <TextInput placeholder='password'
            placeholderTextColor='#606060FF'
            style={styles.input2} />
          <Button
            title='log In'
            color="#606060FF"
            onPress={() => {
              this.apiCall();
              // console.log(this.state.name[0].message);

            }}
          />
          {/* <FlatList
            data={this.state.name}
            renderItem={({ item }) =>
              < Text style={{ color: 'black' }} > {item.name}</Text>
            }
            style={{ color: 'black', borderWidth: 2 }}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#606060FF',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center'
  },
  box: {
    height: 400,
    width: 315,
    margin: 5,
    marginTop: 150,
    backgroundColor: '#D6ED17FF',
    borderRadius: 10,
    padding: 10,

  },
  input1: {
    borderWidth: 1,
    marginTop: 40,
    marginHorizontal: 20,
    borderColor: "#606060FF",
    borderRadius: 10,
    color: 'black',
  },
  input2: {
    borderWidth: 1,
    marginTop: 40,
    marginHorizontal: 20,
    borderColor: "#606060FF",
    borderRadius: 10,
    color: 'black',
    marginBottom: 40,
  }
})

export default App;
