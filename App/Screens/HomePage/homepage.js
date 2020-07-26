import * as React from 'react';
import { View, Image } from 'react-native'
import * as Global from '../../Utils/Common/Global';
import * as images from '../../Assets/Images/map';
import styles from './style';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LoginScreen from './../LoginScreen/loginScreen';

const initialLayout = { width: Global.ScreenWidth };

const FirstRoute = () => (
  <LoginScreen />
);

const SecondRoute = () => (
  <View style={styles.scene} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabStyle}
    labelStyle={styles.labelStyle}
  />
);

export default function HomePage() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'LOGIN', title: 'LOGIN' },
    { key: 'SIGNUP', title: 'SIGN UP' },
  ]);

  const renderScene = SceneMap({
    LOGIN: FirstRoute,
    SIGNUP: SecondRoute,
  });

  return (
    <View style={styles.container} >
      <View style={styles.imageView} >
        <Image
          source={images.login.appIcon}
          resizeMode={'center'}
        />
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}


