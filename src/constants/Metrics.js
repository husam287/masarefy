import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const METRICS = {
  screenWidth: WIDTH,
  screenHeight: HEIGHT,
  bottomTabsHeight: 50,
  mainArroundSpacing: WIDTH * 0.056,
  headerHeight: getStatusBarHeight() + 30,
};

export default METRICS;
