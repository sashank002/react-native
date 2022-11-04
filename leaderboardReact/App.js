/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ListScreen from './components/ListScreen';

const App = () => {
  const [data, setData] = useState([]);
  const [mid, setMid] = useState(0);
  const link = 'http://zsquare-contest.s3.ap-south-1.amazonaws.com/';

  const callApi = async mid => {
    const body = {
      mid: mid,
    };

    const response = await fetch(
      'https://contest-test-2.herokuapp.com/leaderboard/getByMid',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      const myresponse = await response.json();
      // console.log(JSON.stringify(myresponse));
      console.log(myresponse.length);
      // for (let i = 0; i < 3; i++) {
      //   setData([...data, myresponse[i]]);
      // }
      setData([...myresponse]);
      console.log(data.length);
    }
  };

  useEffect(() => {
    callApi(mid);
  }, [mid]);

  return (
    <View style={styles.main}>
      <View style={styles.screen1}>
        <View style={[styles.position2, styles.cardStyle]}>
          <Image
            style={styles.photStyle2}
            source={{
              uri: `${link}${data[1]?.profile_pic}` || ' ',
              // uri :
              // uri:
              //   typeof data[1] == 'undefined'
              //     ? ' '
              //     : `${link}${data[1].profile_pic}`,
            }}
          />

          <Text style={styles.textStyle2}>
            {' '}
            {typeof data[1] == 'undefined' ? ' ' : data[1].name}{' '}
          </Text>

          <Text style={[styles.textStyle2, {fontWeight: '200'}]}>
            {' '}
            {typeof data[1] == 'undefined' ? ' ' : data[1].contest_winners}{' '}
          </Text>

          <Image
            style={styles.iconStyle2}
            source={require('./images/silver.png')}
          />
        </View>

        <View style={[styles.position1, styles.cardStyle]}>
          <Image
            style={styles.photoStyle1}
            source={{
              uri:
                typeof data[1] == 'undefined'
                  ? ' '
                  : `${link}${data[0].profile_pic}`,
            }}
          />

          <Text style={styles.textStyle1}>
            {' '}
            {typeof data[1] == 'undefined' ? ' ' : data[0].name} }
          </Text>

          <Text style={[styles.textStyle1, {marginTop: 5, fontWeight: '200'}]}>
            {typeof data[1] == 'undefined' ? ' ' : data[0].contest_winners}{' '}
          </Text>

          <Image
            style={styles.iconStyle1}
            source={require('./images/gold.png')}
          />
        </View>

        <View style={[styles.position3, styles.cardStyle]}>
          <Image
            style={styles.photStyle2}
            source={{
              uri:
                typeof data[1] == 'undefined'
                  ? ' '
                  : `${link}${data[2].profile_pic}`,
            }}
          />

          <Text style={styles.textStyle2}>
            {' '}
            {typeof data[1] == 'undefined' ? ' ' : data[2].name}{' '}
          </Text>

          <Text style={[styles.textStyle2, {fontWeight: '200'}]}>
            {typeof data[1] == 'undefined' ? ' ' : data[2].contest_winners}{' '}
          </Text>

          <Image
            style={styles.iconStyle2}
            source={require('./images/bronze.png')}
          />
        </View>
      </View>
      <View style={styles.screen2}>
        <ListScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 10,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  cardStyle: {
    // backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'relative',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  photoStyle1: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  photStyle2: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  iconStyle1: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    position: 'relative',
    top: -120,
    left: -27,
  },
  iconStyle2: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 10,
    position: 'relative',
    top: -100,
    left: -25,
  },
  textStyle1: {
    marginTop: 35,
    color: 'white',
  },
  textStyle2: {
    marginTop: 5,
    color: 'white',
  },
  screen1: {
    flex: 3,
    // borderColor: 'green',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  screen2: {
    flex: 7,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  position2: {
    flex: 0.9,
    height: '70%',
    top: 62,
    marginHorizontal: 5,
    backgroundColor: '#c66b3d',
  },
  position1: {
    flex: 1.2,
    height: '85%',
    top: 26,
    marginHorizontal: 3,
    backgroundColor: '#26495C',
  },
  position3: {
    flex: 0.9,
    height: '70%',
    top: 62,
    marginHorizontal: 5,
    backgroundColor: '#c4a35a',
  },
});

export default App;
