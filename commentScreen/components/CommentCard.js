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
  Image,
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

const Imgheight = Winheight * 0.08;

const CommentCard = () => {
  return (
    <View style={styles.commentCard}>
      <Image
        style={styles.userImg}
        source={require('../images/rashmika.jpeg')}
      />
      <View style={styles.commetBody}>
        <View style={styles.leftRight}>
          <Text style={styles.UserName}>Rashmika mandanna</Text>
          <Text style={styles.commentDate}>3:25 22 Aug 21</Text>
        </View>
        <View>
          <Text style={styles.comment}>
            Happiness is not something readymade. it comes from your own
            actions.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentCard: {
    backgroundColor: 'white',
    padding: 18,
    borderTopColor: '#F4F4F6FD',
    borderTopWidth: 1,
    width: Winwidth,
    flexDirection: 'row',
  },
  userImg: {
    // height: 62,
    height: Winheight * 0.08,
    width: Imgheight,
    borderRadius: 12,
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 2,
  },
  commetBody: {
    flexDirection: 'column',
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    width: Winwidth * 0.73,
  },
  UserName: {
    color: '#00005C',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  commentDate: {
    color: '#71798D',
    fontSize: 10.15,
    fontFamily: 'Montserrat-Regular',
  },
  comment: {
    // borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    color: '#78849E',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 8,
    width: Winwidth * 0.73,
    lineHeight: 18,
  },
});

export default CommentCard;
