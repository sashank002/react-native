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

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.container}>
      {/* ______________________________PHOTO CONTEST _______________________________ */}
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.upper}>
          <Image style={styles.img} source={require('./images/event1.png')} />
          <View style={styles.rank}>
            <Text style={styles.rankText}> Rank 30</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomCard]}>
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
            <View>
              <Text style={styles.text1}>
                If you’re offered a seat on a rocket ship, don’t ask what seat!
                Just get on
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Download Certificate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ______________________________WRITING  CONTEST _______________________________ */}
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.bottom}>
          <View style={[styles.bottomCard]}>
            <View style={styles.rank}>
              <Text style={styles.rankText}> Rank 2</Text>
            </View>
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
            <View>
              <Text style={styles.text1}>
                If you’re offered a seat on a rocket ship, don’t ask what seat!
                Just get on If you’re offered a seat on a rocket ship, don’t ask
                what seat! Just get on If you’re offered a seat on a rocket
                ship, don’t ask what seat! Just get on
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Download Certificate</Text>
            </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    // borderWidth: 1,
    width: Winwidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 11,
  },
  upper: {
    // borderWidth: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  img: {
    height: Winheight * 0.24,
    width: Winwidth * 0.9,
    borderRadius: 11,
  },
  bottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 1,
    borderRadius: 11,
  },
  bottomCard: {
    // borderWidth: 1,
    paddingVertical: 10,
    width: Winwidth * 0.9,
    borderRadius: 11,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
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
  text1: {
    marginLeft: 12,
    color: '#10336B',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  btn: {
    height: Winheight * 0.053,
    width: 170,
    marginLeft: 11,
    backgroundColor: '#2574A9',
    borderRadius: 6,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  rank: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 3.62,
    borderBottomRightRadius: 3.62,
    borderTopLeftRadius: 3.62,
    backgroundColor: '#2574A9',
    width: 73.78,
    height: 31.33,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default App;
