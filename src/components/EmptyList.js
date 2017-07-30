import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function EmptyList() {
  return (
    <View style={s.container}>
      <Image style={s.logo} source={require('../img/empty.png')} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 20,
    width: 140,
    height: 176,
  },
});

export default EmptyList;
