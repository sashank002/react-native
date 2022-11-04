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

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.upper}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={require('./images/event1.png')} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.leftRight}>
            <Text style={styles.contestTitle}>Picture Perfect</Text>
            <View style={styles.aliveView}>
              <Text style={styles.contestAlive}>Ended</Text>
            </View>
          </View>
          <View style={styles.leftRight}>
            <View style={styles.upBottom}>
              <View style={styles.h1}>
                <Image
                  style={styles.h11}
                  source={require('./images/avatar.png')}
                />
                <Text style={styles.h12}>Express Yourself Community</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTitle}> Check winners </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.img1}>
              <Image
                style={{height: 35, width: 35}}
                source={require('./images/photo.png')}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.upper}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={require('./images/art.jpeg')} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.leftRight}>
            <Text style={styles.contestTitle}>Art Contest</Text>
            <View style={styles.aliveView}>
              <Text style={styles.contestAlive}>Ended</Text>
            </View>
          </View>
          <View style={styles.leftRight}>
            <View style={styles.upBottom}>
              <View style={styles.h1}>
                <Image
                  style={styles.h11}
                  source={require('./images/avatar.png')}
                />
                <Text style={styles.h12}>Express Yourself Community</Text>
              </View>
              <View style={styles.endingView}>
                <Text style={styles.endingText1}> Ending </Text>
                <Image
                  style={{marginTop: 2}}
                  source={require('./images/Calendar.png')}
                />
                <Text style={styles.endingText2}>Thursday 22 Aug,2022</Text>
              </View>
            </View>
            <View style={styles.img1}>
              <Image
                style={{height: 35, width: 35}}
                source={require('./images/photo.png')}
              />
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
    // height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',

    height: Winheight * 0.3,
    width: Winwidth * 0.9,

    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10.9,
    marginBottom: 10,
  },
  upper: {
    // height: '60%',
    flex: 5,
    // borderWidth: 1,
  },
  bottom: {
    // height: '40%',
    flex: 3,
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  imgView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  img: {
    height: '86%',
    width: '93%',
    borderRadius: 6,
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contestTitle: {
    marginTop: -5,
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
    color: '#050152',
  },
  aliveView: {
    backgroundColor: '#FF9B6E',
    padding: 3,
    borderRadius: 5,
  },
  contestAlive: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#050152',
  },
  upBottom: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  h1: {
    flexDirection: 'row',
  },
  h12: {
    marginLeft: 5,
    color: '#A8A8A8',
    marginTop: '2%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
  },
  btn: {
    marginTop: 7,
    backgroundColor: '#050152',
    paddingHorizontal: 3,
    paddingVertical: 4,
    width: '55%',
    borderRadius: 7,
  },

  btnTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
  },
  img1: {
    marginTop: '3%',
  },
  endingView: {
    flexDirection: 'row',
    marginTop: 5,
  },
  endingText1: {
    fontSize: 9.6,
    fontFamily: 'Montserrat-Regular',
    color: '#FF3601',
    marginRight: 4,
  },
  endingText2: {
    fontSize: 9.5,
    fontFamily: 'Montserrat-Light',
    color: '#050152',
    marginLeft: 4,
  },
});

export default App;
