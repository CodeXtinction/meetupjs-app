import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

const propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

function Row({ item, onPress }) {
  const { date, eventName, place, color, eventLink } = item;
  return (
    <TouchableNativeFeedback onPress={() => onPress(eventLink)}>
      <View style={[s.container]}>
        <View style={s.timeline}>
          <View style={s.line} />
          <View style={[s.circle]} />
        </View>
        <View style={s.card}>
          <Text style={s.date}>
            {moment(date).utc().format('ddd Do, HH:mm').toUpperCase()}
          </Text>
          <Text style={s.description}>
            {eventName}
          </Text>
          <Text style={s.place}>
            {place.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  timeline: {
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: '#C2C2C2',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginLeft: -8.5,
    borderWidth: 2,
    borderColor: '#C2C2C2',
    backgroundColor: '#FD7D8C',
  },
  card: {
    flex: 1,
    paddingVertical: 20,
  },
  date: {
    fontFamily: 'rubik_bold',
    paddingBottom: 10,
    fontSize: 10,
    color: '#B0BEC5',
  },
  description: {
    fontFamily: 'rubik_bold',
    fontSize: 13,
    paddingBottom: 5,
    color: '#607D8B',
  },
  place: {
    fontFamily: 'rubik_medium',
    fontSize: 10,
    color: '#B0BEC5',
  },
});

Row.propTypes = propTypes;
export default Row;
