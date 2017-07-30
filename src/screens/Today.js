import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View, Linking, StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import * as Animatable from 'react-native-animatable';

import Constants from '../global/Constants';

import Card from '../components/Card';
import HeaderList from '../components/HeaderList';
import EmptyList from '../components/EmptyList';

const propTypes = {
  events: PropTypes.object.isRequired,
};

@inject('events')
@observer
class Today extends Component {
  static navigatorStyle = {
    ...Constants.screenOpts.TODAY,
  };

  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    const { events } = this.props;
    events.getLocalEvents();
    events.getEvents();
  }

  openLink(url) {
    Linking.openURL(url);
  }

  render() {
    const { events } = this.props;
    const { refreshing } = this.props.events;

    return (
      <Animatable.View
        style={s.container}
        animation="fadeIn"
        useNativeDriver
        easing="ease-out"
        duration={275}
      >
        <FlatList
          ListHeaderComponent={() => <HeaderList title="Hoy" />}
          ListEmptyComponent={() => <EmptyList />}
          style={s.list}
          data={events.todayList}
          renderItem={({ item }) => <Card item={item} onPress={this.openLink} />}
          keyExtractor={item => item.eventLink}
        />
      </Animatable.View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff1',
  },
  list: {
    flex: 1,
    marginHorizontal: 10,
  },
});

Today.wrappedComponent.propTypes = propTypes;
export default Today;
