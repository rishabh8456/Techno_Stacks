import { StyleSheet } from 'react-native';
import * as Global from './../../Utils/Common/Global';
import * as Colors from '../../Utils/Common/Colors';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: Colors.White
  },
  detailsView: {
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 2,
    borderRadius: 5,
    margin: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addressView: {
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 2,
    borderRadius: 5,
    paddingLeft: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  imageView: {
    borderWidth: 1,
    height: Global.ScreenWidth * 0.25,
    width: Global.ScreenWidth * 0.25,
    borderRadius: (Global.ScreenWidth * 0.25) / 2,
    borderColor: Colors.LightBlue
  },
  nameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  iconStyle: {
    height: 30,
    width: 30
  },
  addressInnerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 20
  },
  descView: {
    paddingRight: 10
  },
  contactView: {
    marginTop: 20
  },
  conatctText: {
    fontSize: 15,
    marginLeft: 50,
    marginTop: 10
  }
});

export default styles;



