import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const propTypes = {
  icon: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

function SocialIcon({ icon, onPress }) {
  const { image, link } = icon;
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => onPress(link)}>
        <Image style={s.icon} source={image} />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

SocialIcon.propTypes = propTypes;
export default SocialIcon;
