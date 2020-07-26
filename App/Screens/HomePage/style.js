import { StyleSheet } from 'react-native';
import * as Global from './../../Utils/Common/Global';
import * as Colors from '../../Utils/Common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  imageView: {
    height: Global.ScreenHeight * 0.3,
    backgroundColor: Colors.Black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scene: {
    flex: 1,
    backgroundColor: Colors.White
  },
  indicatorStyle: {
    backgroundColor: Colors.LightBlue,
    height: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  tabStyle: {
    backgroundColor: Colors.Black,
  },
  labelStyle: {
    fontSize: 20
  }
});

export default styles;
