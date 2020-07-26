/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import RootNavigator from './App/Navigators/RootNavigator';
import { Provider } from "react-redux";
import configureStore from '././App/Redux/store';
import DeviceInfo from 'react-native-device-info';
import * as Global from '././App/Utils/Common/Global';
import { PersistGate } from 'redux-persist/es/integration/react';
const { persistor, store } = configureStore();

class App extends Component {

  componentDidMount() {

    Global.DEVICEVERSION = DeviceInfo.getSystemVersion();
    Global.DEVICEUID = DeviceInfo.getUniqueId();
    Global.APPVERSION = DeviceInfo.getVersion();
    Global.DEVICEMODAL = DeviceInfo.getModel();

    DeviceInfo.getBaseOs().then(baseOs => {
      Global.DEVICETYPE = baseOs
    });

    DeviceInfo.getDeviceName().then(deviceName => {
      Global.DEVICENAME = deviceName
    });

    DeviceInfo.getDeviceToken().then(deviceToken => {
      Global.DEVICETOKEN = deviceToken
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>

    )
  }
}

export default App;
