import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View, Linking, StatusBar, RefreshControl } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Constants from '../global/Constants';

import Card from '../components/Card';
import HeaderList from '../components/HeaderList';

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
      <View style={s.container}>
        <FlatList
          ListHeaderComponent={() => <HeaderList title="Hoy" />}
          style={s.list}
          data={events.todayList}
          renderItem={({ item }) => <Card item={item} onPress={this.openLink} />}
          keyExtractor={item => item.eventLink}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => events.getEvents()} />
          }
        />
      </View>
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
