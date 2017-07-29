import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

import SocialIcon from '../components/SocialIcon';
import Constants from '../global/Constants';
import icons from '../data/icons';

class Follow extends Component {
  static navigatorStyle = {
    ...Constants.screenOpts.FOLLOW,
  };

  openLink(url) {
    Linking.openURL(url);
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.logoWrapper}>
          <Image style={s.logo} source={require('../img/logo.png')} />
        </View>
        <View style={s.textWrapper}>
          <Text style={s.follow}>SIGUENOS</Text>
          <Text style={s.text}>Sumate a la comunidad y enterate de todas las novedades!</Text>
        </View>
        <View style={s.iconWrapper}>
          <SocialIcon icon={icons.github} onPress={this.openLink} />
          <SocialIcon icon={icons.slack} onPress={this.openLink} />
          <SocialIcon icon={icons.twitter} onPress={this.openLink} />
          <SocialIcon icon={icons.youtube} onPress={this.openLink} />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA28',
  },
  logoWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  iconWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  follow: {
    fontFamily: 'rubik_bold',
    fontSize: 20,
    color: '#000',
    paddingBottom: 10,
  },
  text: {
    fontFamily: 'rubik_regular',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Follow;
