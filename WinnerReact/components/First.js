/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import CheckBox from '@react-native-community/checkbox';

import CheckBox from '@react-native-community/checkbox';

const FirstScreen = props => {
  const [data, setData] = useState([]);
  const [mid, setMid] = useState('0');
  const [loadingMore, setLoadingMore] = useState(false);
  const [check, setCheck] = useState([]);
  const [screen, setScreen] = useState('insideScreen');
  const [dabavu, setDabavu] = useState([]);
  let count = -1;
  let index;

  const callApi = async mid => {
    setLoadingMore(true);
    const body = {
      uid: '6013bdbe824c8263693f8111',
      mid: mid,
    };
    const response = await fetch(
      'https://contest-test-2.herokuapp.com/contest/getAllMainMid',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(body),
      },
    );
    if (response.ok) {
      console.log(JSON.stringify(response));
      const myresponse = await response.json();
      console.log(JSON.stringify(myresponse));
      setData([...data, ...myresponse.message]);
      // console.log(data);
      setLoadingMore(false);

      const len = data.length;

      const clonecheck = [];
      for (let i = 0; i < len; i++) {
        clonecheck.push(false);
      }
      setCheck([...clonecheck]);

      // console.log(dabavu);
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    callApi(mid);
  }, [mid]);

  const changeMid = () => {
    setMid(data[data.length - 1]._id);

    const len = data.length;
    const cloneDabavu = [];
    for (let i = 0; i < len; i++) {
      cloneDabavu.push(false);
    }

    setDabavu([...cloneDabavu]);
  };

  return (
    <View style={{height: '100%'}}>
      <View style={{height: '15%', backgroundColor: '#46211A'}}>
        <Text style={styles.text}>CHoose winner {props.count} </Text>
      </View>

      <View style={styles.container}>
        {/* <Text> hello kem cho ? </Text> */}
        {/* <Text> lordsjosdhgoisn;oen oewo</Text>*/}
        <FlatList
          data={data}
          // style={{height: 570}}
          // keyExtractor={this.keyExtractor}
          renderItem={({item}) => {
            return (
              <View style={styles.box}>
                <Text style={styles.list}>{item.cname}</Text>
                <CheckBox
                  style={styles.checkbox}
                  value={check[data.indexOf(item)]}
                  disabled={dabavu[data.indexOf(item)]}
                  onValueChange={() => {
                    // console.log(data.indexOf(item));

                    const istrue = check.indexOf(true);
                    if (istrue != -1 && istrue != data.indexOf(item)) {
                      const clone = check;
                      clone[istrue] = !clone[istrue];
                      setCheck([...clone]);
                    }
                    const clone = check;
                    clone[data.indexOf(item)] = !clone[data.indexOf(item)];
                    setCheck([...clone]);
                  }}
                />
              </View>
            );
          }}
          onEndReached={changeMid}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            loadingMore && <ActivityIndicator size="large" color="white" />
          }
        />
      </View>

      <View style={{height: '10%'}}>
        <Button
          title="submit"
          color="#693D3D"
          onPress={() => {
            const i = check.indexOf(true);
            if (i == -1) {
              alert('please check one checkbox ');
            } else {
              // console.log(data[i].cname);
              props.changeState(data[i].cname);
              const clonePress = dabavu;
              clonePress[i] = !clonePress[i];
              setDabavu([...clonePress]);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#BA5536',
    height: '80%',
  },
  box: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  list: {
    fontSize: 20,
    alignSelf: 'center',
    padding: 30,
    color: 'white',
    // flex: 5,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  checkbox: {
    // flex: 1,
    alignSelf: 'center',
  },
});

export default FirstScreen;
