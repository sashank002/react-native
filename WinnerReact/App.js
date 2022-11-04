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
  FlatList,
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
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const changeState = cname => {
    setCurrent('DashboardScreen');
    setData([...data, `${count} ${cname}`]);
  };

  const DashboardScreen = (
    <View style={{height: '100%', backgroundColor: '#693D3D'}}>
      <View style={{height: '10%', backgroundColor: '#46211A'}}>
        <Text style={styles.text}>WINNER LIST</Text>
      </View>
      <View style={{height: '70%', backgroundColor: '#BA5536'}}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.box}>
                <Text style={styles.list}>{item}</Text>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#A43820"
          title="choose winner"
          onPress={() => {
            setCurrent('InsideScreen');
            setCount(count + 1);
          }}
        />

        <Button
          title="Delete"
          color="#A43820"
          onPress={() => {
            data.splice(-1);
            setData([...data]);
            setCount(count - 1);
          }}
        />
      </View>
    </View>
  );

  const InsideScreen = <FirstScreen count={count} changeState={changeState} />;

  return current === 'DashboardScreen' ? DashboardScreen : InsideScreen;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 40,
    padding: 10,
    color: 'white',
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
  button: {
    padding: 10,
    margin: 10,
    height: '10%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default App;
