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
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Slider from 'react-native-slider';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;
const App = () => {
  const [sliderState, setSliderState] = useState(0);
  const arr = ['#FFCC00'];

  return (
    <View style={styles.container}>
      <View style={[styles.leftRight, styles.btnView]}>
        <TouchableOpacity style={styles.topBtn}>
          <Text style={styles.btnText}> Winners </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn}>
          <Text style={styles.btnText}> My Pools </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.filterView}>
        <Image
          style={styles.filterImg}
          source={require('./images/filter-icon.png')}
        />
        <Text style={styles.filterText}>Filter</Text>
        <Image
          style={styles.filterImg}
          source={require('./images/arrow-down-sign-to-navigate.png')}
        />
      </TouchableOpacity>

      {/*............................... CARD 1 ...................................*/}
      <View style={styles.card}>
        <View style={[styles.heading, styles.leftRight]}>
          <View style={styles.UpDown}>
            <Image
              style={styles.img}
              // source={{
              //   url: './images/photo.png',
              // }}
              source={require('./images/photo.png')}
            />
            <View style={styles.headText}>
              <Text style={[styles.eventTitle, styles.textFamily]}>
                Picture Perfect Pool
              </Text>
              <Text style={[styles.eventTitle, styles.textFamily]}>
                Rs 7500{' '}
                <Text
                  style={{
                    fontSize: 10,
                    marginLeft: 5,
                    fontFamily: 'Montserrat-Medium',
                    color: '#71798D',
                  }}>
                  Total prize pool
                </Text>{' '}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.prizeTitle1}>
              <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16}}>
                {' '}
                Rs 30
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={[styles.poolName]}>Photography</Text>
          <View>
            <Slider
              thumbTintColor="#FF9B6E"
              minimumTrackTintColor="#FF9B6E"
              style={styles.slider}
              value={sliderState}
              onValueChnage={value => setSliderState(value)}
            />
          </View>
          <View style={styles.leftRight}>
            <Text style={[styles.spot1]}>{sliderState} Spots filled</Text>
            <Text style={[styles.spot2]}>Total Spots : 100</Text>
          </View>
          <Text style={[styles.myEntries]}>
            My Entries :{' '}
            <Text style={{fontFamily: 'Montserrat-SemiBold', color: '#10336B'}}>
              25
            </Text>{' '}
          </Text>
          <View style={[styles.leftRight, styles.trophy]}>
            <View style={[styles.UpDown, {marginTop: 4}]}>
              <Image
                style={styles.trophyImg}
                source={require('./images/Trophy-Icon.png')}
              />
              <View style={styles.trophyText}>
                <Text style={styles.winPercentText}>Win percent</Text>
                <Text style={styles.winNum}>71%</Text>
              </View>
            </View>
            <View>
              <Text style={styles.noOfWinners}>
                No of Winners :{' '}
                <Text
                  style={{
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 14,
                    color: '#10336B',
                  }}>
                  25
                </Text>{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F8FF',
    height: Winheight,
    // flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  btnView: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Winwidth * 0.9,
  },

  topBtn: {
    width: Winwidth * 0.4,
    backgroundColor: '#050152',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 9,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  filterView: {
    width: Winwidth * 0.9,
    backgroundColor: '#050152',
    borderRadius: 18,
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 15,
  },
  filterImg: {
    height: 20,
    width: 20,
  },
  filterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  card: {
    backgroundColor: 'white',
    height: Winheight * 0.29,
    width: '90%',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10.9,
    marginBottom: 10,
  },
  heading: {
    height: '25%',
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
    padding: 10,
  },
  UpDown: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'center',
  },
  headText: {
    paddingLeft: 5,
    // borderWidth: 1,
  },
  eventTitle: {
    fontSize: 18,
    color: '#050152',
  },
  img: {
    marginTop: 3,
    // borderWidth: 1,
  },
  body: {
    padding: 10,
    // borderWidth: 1,
    height: '75%',
  },
  slider: {
    color: 'red',
    marginVertical: -1,
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  poolName: {
    // borderWidth: 1,
    padding: 1,
    fontSize: 14,
    color: '#71798D',
    fontFamily: 'Montserrat-Medium',
  },
  textFamily: {
    fontFamily: 'Montserrat-SemiBold',
  },
  prizeTitle1: {
    backgroundColor: '#FFCC00',
    padding: 2,
    marginHorizontal: 3,
    borderRadius: 6,
    color: '#050152',
  },
  prizeTitle2: {
    backgroundColor: '#FF9B6E',
    padding: 2,
    marginHorizontal: 3,
    borderRadius: 6,
    color: '#050152',
  },
  prizeTitle3: {
    backgroundColor: '#5CFF00',
    padding: 2,
    marginHorizontal: 3,
    borderRadius: 6,
    color: '#050152',
  },
  spot1: {
    color: '#050152',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    // borderWidth: 1,
  },
  spot2: {
    color: '#A8A8A8',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    // borderWidth: 1,
  },
  myEntries: {
    marginTop: 2,
    fontFamily: 'Montserrat-Medium',
    color: '#A8A8A8',
    fontSize: 12,
  },
  trophy: {
    marginTop: 3,
    backgroundColor: '#F6F6F6',
    borderRadius: 10.9,
    paddingVertical: 3,
    marginHorizontal: 4,
    // borderWidth: 1,
  },
  trophyImg: {
    marginTop: 4,
  },
  trophyText: {
    marginLeft: 10,
    // borderWidth: 1,
    color: '#050152',
  },
  winPercentText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 9,
    color: '#71798D',
  },
  winNum: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#10336B',
  },
  noOfWinners: {
    marginVertical: 10,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#71798D',
    // borderWidth: 1,
  },
});

export default App;
