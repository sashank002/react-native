/* eslint-disable prettier/prettier */
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

const ListScreen = props => {
  const [data, setData] = useState([]);
  const [mid, setMid] = useState(3);
  const link = 'http://zsquare-contest.s3.ap-south-1.amazonaws.com/';
  const [rank, setRank] = useState(4);

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
      //   console.log(JSON.stringify(myresponse));
      //   console.log(myresponse.length);
      setData([...data, ...myresponse]);
      //   console.log('data', data);
    }
  };

  useEffect(() => {
    callApi(mid);
  }, [mid]);

  const changeMid = () => {
    setMid(data.length + 3);
    setRank(4);
  };

  return (
    <View>
      {/* <View style={styles.headings}>
        <Text style={{color: 'black'}}>RANK</Text>
        <Text>PLAYER</Text>
        <Text>PRIZE</Text>
      </View> */}
      <FlatList
        data={data}
        renderItem={({item}) => {
          //   let clonerank = rank;
          //   clonerank = clonerank + 1;
          //   setRank(clonerank);
          return (
            <View style={styles.list}>
              <Text style={styles.rankstyle}>
                {' '}
                {data.indexOf(item) + rank}{' '}
              </Text>
              <Image
                style={styles.img}
                source={{uri: `${link}${item.profile_pic}`}}
              />
              <Text style={styles.text}>💎 {item.name}</Text>
              <Text style={styles.point}> {item.contest_winners} </Text>
            </View>
          );
        }}
        onEndReached={changeMid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#26495C',
    marginHorizontal: 10,
    fontSize: 17,
    width: 180,
  },
  list: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#e5e5dc',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  rankstyle: {
    marginRight: 10,
    fontSize: 17,
    color: '#c66b3d',
  },
  point: {
    color: '#c4a35a',
  },
  headings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
  },
});

export default ListScreen;
