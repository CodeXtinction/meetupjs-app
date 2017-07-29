import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from '../global/Constants';

class Container extends Component {
  static navigatorStyle = {
    ...Constants.screenOpts.CONTAINER,
  };

  render() {
    return <View style={s.container} />;
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff1',
  },
});

export default Container;
