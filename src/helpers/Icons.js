import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'md-calendar': [50, '#bbb'],
  'md-bonfire': [50, '#bbb'],
  'ios-heart-outline': [50, '#bbb'],
  'ios-calendar-outline': [50, '#bbb'],
  'ios-calendar': [50, '#bbb'],
  'md-flame': [50, '#bbb'],
  'logo-github': [50, '#bbb'],
  'logo-octocat': [50, '#bbb'],
};

const defaultIconProvider = Ionicons;

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map((iconName) => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1],
      );
    }),
  ).then((sources) => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
