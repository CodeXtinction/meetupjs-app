import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet, SectionList, RefreshControl, Linking } from 'react-native';

import Constants from '../global/Constants';

import Row from '../components/Row';
import HeaderSection from '../components/HeaderSection';

const propTypes = {
  events: PropTypes.object.isRequired,
};

@inject('events')
@observer
class Calendar extends Component {
  static navigatorStyle = {
    ...Constants.screenOpts.CALENDAR,
  };

  openLink(url) {
    Linking.openURL(url);
  }

  render() {
    const { events } = this.props;
    const { refreshing } = this.props.events;

    return (
      <View style={s.container}>
        <SectionList
          renderItem={({ item }) => <Row item={item} onPress={this.openLink} />}
          renderSectionHeader={({ section }) => <HeaderSection title={section.title} />}
          sections={events.dataSource}
          keyExtractor={item => item.eventLink}
          initialNumToRender={8}
          style={s.list}
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
  },
});

Calendar.wrappedComponent.propTypes = propTypes;
export default Calendar;
