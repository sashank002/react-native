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

const HistoryCard = () => {
  return (
    <View style={[styles.historyCard, styles.shadowProp]}>
      <View style={[styles.heading, styles.leftRight]}>
        <View style={styles.UpDown}>
          <Image style={styles.img} source={require('../images/photo.png')} />
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
          <Image source={require('../images/Calendar.png')} /> Thursday 22
          sep,2022{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  historyCard: {
    backgroundColor: 'white',
    height: Winheight * 0.13,
    width: Winwidth * 0.9,
    // borderWidth: 1,
    padding: 5,
    borderRadius: 10.9,
    marginVertical: 10,
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  UpDown: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'center',
  },
  headText: {
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  eventTitle: {
    fontSize: 16,
    color: '#050152',
    fontFamily: 'Montserrat-Bold',
  },
  img: {
    marginTop: 8,
    height: 34,
    width: 34,
    // borderWidth: 1,
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prize: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: 'green',
    marginTop: -5,
  },
  bottomView: {
    // borderWidth: 1,
    borderTopWidth: 0.5,
    borderTopColor: '#71798D',
    marginVertical: 5,
    marginHorizontal: 8,
    paddingTop: 10,
    padding: 5,
  },
  contestType: {
    fontFamily: 'Montserrat-Medium',
    color: '#71798D',
    fontSize: 12,
  },

  contestDate: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#050152',
    fontSize: 12,
  },
});

export default HistoryCard;
