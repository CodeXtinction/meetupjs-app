import { Navigation } from 'react-native-navigation';
import Provider from './utils/MobxProvider';
import Stores from './stores';
import Constants from './global/Constants';
import appStyle from './global/appStyle';
import { iconsMap, iconsLoaded } from './helpers/Icons';

import registerScreens from './screens';

registerScreens(Stores, Provider);

function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      ...Constants.Screens.CONTAINER,
      topTabs: [
        {
          screenId: Constants.Screens.TODAY_TAB.screen,
          icon: iconsMap['md-flame'],
        },
        {
          screenId: Constants.Screens.CALENDAR_TAB.screen,
          icon: iconsMap['md-calendar'],
        },
        {
          screenId: Constants.Screens.FOLLOW_TAB.screen,
          icon: iconsMap['logo-github'],
        },
      ],
    },
    appStyle: appStyle.Android,
  });
}

iconsLoaded.then(() => {
  startApp();
});
