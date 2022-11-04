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

import CheckBox from '@react-native-community/checkbox';

const FirstScreen = () => {
  const [data, setData] = useState([]);
  const [mid, setMid] = useState('0');
  const [loadingMore, setLoadingMore] = useState(false);

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
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    callApi(mid);
  }, [mid]);

  const changeMid = () => {
    setMid(data[data.length - 1]._id);
  };

  return (
    <View style={styles.container}>
      {/* <Text> hello kem cho ? </Text> */}

      <Text style={styles.text}>Choose winner no -- </Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text style={styles.list}>{item.cname}</Text>
            <CheckBox />
          </View>
        )}
        onEndReached={changeMid}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loadingMore && <ActivityIndicator size="large" color="red" />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
  list: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default FirstScreen;
