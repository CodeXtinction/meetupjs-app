// registro de pantallas
export const Screens = {
  TODAY_TAB: {
    screen: 'meetup.Today',
    title: 'Para vos',
  },
  CALENDAR_TAB: {
    screen: 'meetup.Calendar',
    title: 'Calendario',
  },
  FOLLOW_TAB: {
    screen: 'meetup.Follow',
    title: 'Follow',
  },
  CONTAINER: {
    screen: 'meetup.Container',
    title: '{} Meetup.js',
  },
};

// opciones por pantalla individual
export const screenOpts = {
  TODAY: {},
  CALENDAR: {},
  FOLLOW: {},
  CONTAINER: {
    navBarHideOnScroll: true,
    statusBarColor: '#4d394b',
    navBarBackgroundColor: '#4d394b',
    navBarTextFontFamily: 'rubik_bold',
    navBarTextFontSize: 18,
    navBarTextColor: '#757575',
  },
};
