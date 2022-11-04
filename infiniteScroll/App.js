/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
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
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.list}>{item.cname}</Text>}
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
});

export default App;
