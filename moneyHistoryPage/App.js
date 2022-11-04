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
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HistoryCard from './components/HistoryCard';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.upperCard, styles.shadowProp]}>
        <View style={styles.cashCard1}>
          <Text style={styles.cashText1}>₹ 54 </Text>
          <Text style={styles.cashText2}>Winnings Cash</Text>
        </View>
        <View style={styles.cashCard2}>
          <Text style={styles.cashText1}>₹ 24 </Text>
          <Text style={styles.cashText2}>Deposit Cash</Text>
        </View>
      </View>

      {/* <View style={[styles.historyCard, styles.shadowProp]}>
        <View style={[styles.heading, styles.leftRight]}>
          <View style={styles.UpDown}>
            <Image style={styles.img} source={require('./images/photo.png')} />
            <View style={styles.headText}>
              <Text style={[styles.eventTitle, styles.textFamily]}>
                Picture Perfect Pool
              </Text>
              <Text style={[styles.eventTitle, styles.textFamily]}>
                <Text
                  style={{
                    fontSize: 10,
                    marginLeft: 5,
                    fontFamily: 'Montserrat-Medium',
                    color: '#71798D',
                  }}>
                  Photography
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.prize}> +30</Text>
          </View>
        </View>
        <View style={[styles.bottomView, styles.leftRight]}>
          <Text style={styles.contestType}> Type : Contest </Text>
          <Text style={styles.contestDate}>
            {' '}
            <Image source={require('./images/Calendar.png')} /> Thursday 22
            sep,2022{' '}
          </Text>
        </View>
      </View> */}

      <ScrollView style={styles.sView}>
        <View style={styles.scontainer}>
          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F8FF',
    flexDirection: 'column',
    alignItems: 'center',
    width: Winwidth,
  },
  sView: {
    // backgroundColor: '#F6F8FF',
    // flexDirection: 'column',
    width: Winwidth,
  },
  scontainer: {
    backgroundColor: '#F6F8FF',
    flexDirection: 'column',
    alignItems: 'center',
    width: Winwidth,
  },
  upperCard: {
    width: Winwidth * 0.9,
    backgroundColor: 'white',
    height: Winheight * 0.1,
    // borderWidth: 1,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10.9,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  cashCard1: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#050152',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  cashCard2: {
    width: '50%',
    borderLeftWidth: 1,
    borderLeftColor: '#050152',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  cashText1: {
    color: '#050152',
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
  },
  cashText2: {
    color: '#050152',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
  },
});

export default App;
