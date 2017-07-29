import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const propTypes = {
  title: PropTypes.string.isRequired,
};

function HeaderList({ title }) {
  return (
    <View style={s.container}>
      <Text style={s.title}>
        {title}
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
  title: {
    fontFamily: 'rubik_bold',
    fontSize: 15,
    color: '#424242',
    paddingLeft: 10,
  },
});

HeaderList.propTypes = propTypes;
export default HeaderList;
