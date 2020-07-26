import { StyleSheet } from 'react-native';
import * as Global from './../../Utils/Common/Global';
import * as Colors from '../../Utils/Common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    height: Global.ScreenHeight * 0.065,
    borderRadius: 30,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginBottom: 20,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  ImageStyle: {
    marginRight: 20,
    marginLeft: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  detailsView: {
    marginHorizontal: 35,
    marginTop: 7
  },
  rememberMeView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rememberMeInnerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBoxView: {
    borderRadius: 3,
    height: 20,
    width: 20,
    borderWidth: 1,
    marginRight: 8
  },
  detailsTextStyle: {
    fontSize: 17,
    color: 'gray'
  },
  accpetView: {
    flexDirection: 'row',
    marginTop: 20
  },
  loginView: {
    marginHorizontal: 35,
    marginTop: 30
  },
  loginTouchView: {
    backgroundColor: Colors.LightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30
  },
  loginTextStyle: {
    color: 'white',
    fontSize: 25
  },
  termsConditionView: {
    alignContent: 'center',
    marginTop: 25,
    alignSelf: 'center'
  },
  privacyTextStyle: {
    textAlign: 'center',
    color: Colors.LightBlue,
    fontSize: 20
  },
  AndTextStyle: {
    color: Colors.gray
  },
  versionView: {
    alignContent: 'center',
    marginTop: 10,
    alignSelf: 'center'
  },
  versionTextStyle: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: 20
  },
  textInputStyle: {
    flex: 1,
    fontSize: 20
  }
});

export default styles;
