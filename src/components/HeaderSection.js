import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const propTypes = {
  title: PropTypes.object.isRequired,
};

function HeaderSection({ title }) {
  return (
    <View style={s.container}>
      <Text style={s.text}>
        {title.month.toUpperCase()}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 60,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'rubik_bold',
    paddingLeft: 24,
    fontSize: 19,
    color: '#424242',
  },
});

HeaderSection.propTypes = propTypes;
export default HeaderSection;
