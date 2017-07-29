import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

import { iconsMap, iconsLoaded } from './src/helpers/Icons';

registerScreens();

iconsLoaded.then(() => {
  startApp();
});

function startApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Hoy',
        screen: 'meetup.Today',
        icon: iconsMap['md-bonfire'],
        title: 'Hoy',
      },
      {
        label: 'Calendario',
        screen: 'meetup.Events',
        icon: iconsMap['md-calendar'],
        title: 'Proximos eventos',
      },

      {
        label: 'Follow',
        screen: 'meetup.About',
        icon: iconsMap['ios-heart-outline'],
        title: 'Follow',
      },
    ],
    appStyle: {
      tabFontFamily: 'rubik_medium',
      tabBarLabelColor: '#fff',
      tabBarSelectedButtonColor: '#000',
      tabBarBackgroundColor: '#fff',
      navigationBarColor: '#000',
      navBarTextFontFamily: 'rubik_regular',
      forceTitlesDisplay: false,
      tabBarButtonColor: '#BDBDBD',
      statusBarHidden: true,
    },
  });
}
