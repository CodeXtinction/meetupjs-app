import { Navigation } from 'react-native-navigation';
import Constants from '../global/Constants';

import Follow from './Follow';
import Calendar from './Calendar';
import Today from './Today';
import Container from './Container';

export default function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(
    Constants.Screens.CALENDAR_TAB.screen,
    () => Calendar,
    store,
    Provider,
  );
  Navigation.registerComponent(Constants.Screens.TODAY_TAB.screen, () => Today, store, Provider);
  Navigation.registerComponent(Constants.Screens.FOLLOW_TAB.screen, () => Follow, store, Provider);
  Navigation.registerComponent(
    Constants.Screens.CONTAINER.screen,
    () => Container,
    store,
    Provider,
  );
}
