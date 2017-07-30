import { observable, action, toJS, computed, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import axios from 'axios';

class Store {
  @observable events = [];
  @observable refreshing = false;

  @action
  getEvents() {
    this.refreshing = true;
    return axios
      .get('https://calendar-api.now.sh/')
      .then((res) => {
        const newEvents = this.mapData(res.data);
        AsyncStorage.setItem('events', JSON.stringify(newEvents));
        runInAction(() => {
          this.events = newEvents;
          this.refreshing = false;
        });
      })
      .catch((e) => {
        runInAction(() => {
          this.refreshing = false;
        });
      });
  }

  @action
  getLocalEvents() {
    AsyncStorage.getItem('events', (err, res) => {
      if (res) {
        this.events = JSON.parse(res);
      }
    });
  }

  // data para sectionlist
  @computed
  get dataSource() {
    return toJS(this.events);
  }

  // filtro hoy para FlatList
  @computed
  get todayList() {
    return this.filterToday(this.dataSource);
  }

  mapData(data) {
    return data.map(item => ({
      title: item.when,
      data: item.events,
    }));
  }

  filterToday(events) {
    if (typeof events[0] !== 'undefined') {
      const today = moment().format('MMM Do YY');
      return events[0].data.filter(value => moment(value.date).format('MMM Do YY') === today);
    }
    return [];
  }
}

export default new Store();
