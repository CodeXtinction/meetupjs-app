import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

moment.locale('es');

function Card({ item, onPress }) {
  const { date, eventName, place, eventLink } = item;
  return (
    <TouchableNativeFeedback onPress={() => onPress(eventLink)}>
      <Animatable.View
        style={[s.container]}
        animation="fadeInUp"
        useNativeDriver
        easing="ease-out"
        duration={275}
      >
        <View style={s.timeWrapper}>
          <View style={[s.time, {}]}>
            <Text style={s.timeLabel}>
              {moment(date).utc().format('HH:mm')}
            </Text>
          </View>
        </View>
        <View style={s.body}>
          <Text style={s.bodyLabel} numberOfLines={2}>
            {eventName}
          </Text>
        </View>
        <View style={[s.placeWrapper]}>
          <Text style={s.placeLabel} numberOfLines={1}>
            <Icon name="md-pin" color={'#000'} size={14} />
            {`  ${place}`}
          </Text>
        </View>
      </Animatable.View>
    </TouchableNativeFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 8,
    marginTop: 2,
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 2,
  },
  timeWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  time: {
    width: 50,
    height: 20,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#63E6DA',
  },
  timeLabel: {
    fontFamily: 'rubik_bold',
    color: '#fff',
    fontSize: 9,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  bodyLabel: {
    fontFamily: 'rubik_bold',
    fontSize: 14,
    color: '#78909C',
  },
  placeWrapper: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  placeLabel: {
    fontFamily: 'rubik_regular',
    color: '#424242',
    fontSize: 12,
  },
});

Card.propTypes = propTypes;

export default Card;
