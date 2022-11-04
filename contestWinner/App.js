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

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.upper}>
          <Image style={styles.img} source={require('./images/event1.png')} />
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomBody, styles.shadowProp]}>
            <View style={styles.contestTitle}>
              <Image
                style={styles.img2}
                source={require('./images/photo.png')}
              />
              <View style={styles.upBottom}>
                <Text style={styles.title1}>Some Contest Title</Text>
                <Text style={styles.title2}>Photography</Text>
              </View>
            </View>
            <View style={styles.leftRight}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>All Participants</Text>
              </TouchableOpacity>
              <View style={styles.dateView}>
                <Text style={styles.date1}>Ended : </Text>
                <Image
                  style={styles.img3}
                  source={require('./images/Calendar.png')}
                />
                <Text style={styles.date2}>22 Sept</Text>
              </View>
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
    height: '100%',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  card: {
    // backgroundColor: 'white',
    // height: Winheight * 0.3,
    width: Winwidth,
    // borderWidth: 1,
  },
  upper: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  img: {
    width: Winwidth * 0.9,
    height: Winheight * 0.24,
    borderRadius: 15,
  },
  bottom: {
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBody: {
    marginVertical: 12,
    backgroundColor: 'white',
    height: Winheight * 0.16,
    width: Winwidth * 0.9,
    borderRadius: 10.87,
    // borderWidth: 1,
  },
  contestTitle: {
    flexDirection: 'row',
    margin: 11,
  },
  img2: {
    marginTop: 3,
    height: 32,
    width: 32,
  },
  upBottom: {
    marginLeft: 7,
  },
  title1: {
    color: '#050152',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  title2: {
    color: '#71798D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 11,
  },
  btn: {
    backgroundColor: '#2574A9',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Winheight * 0.05,
    width: Winheight * 0.2,
    borderRadius: 6,
    marginVertical: 5,
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
  dateView: {
    flexDirection: 'row',
    marginTop: 24,
    // borderWidth: 1,
    padding: 5,
  },
  date1: {
    fontSize: 10.68,
    fontFamily: 'Montserrat-Regular',
    color: '#FF3601',
  },
  img3: {
    marginTop: 4,
  },
  date2: {
    color: '#050152',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 4,
  },
});

export default App;
