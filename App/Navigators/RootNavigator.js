// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import * as Colors from '../Utils/Common//Colors';
import { connect } from 'react-redux';
import HomePage from '../Screens/HomePage/homepage';
import Userdetails from '../Screens/UserDetails/userdetails';


const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomePage} />
      <Stack.Screen
        name="Userdetails"
        options={{
          title: 'My Profile',
          headerTitleStyle: { color: Colors.White, fontSize: 25 },
          headerStyle: { backgroundColor: Colors.Black },
        }}
        component={Userdetails}
      />
    </AuthStack.Navigator>
  )

}

const LoggedInNavigator = () => {
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="Userdetails"
        options={{
          title: 'My Profile',
          headerTitleStyle: { color: Colors.White, fontSize: 25 },
          headerStyle: { backgroundColor: Colors.Black },
        }}
        component={Userdetails}
      />
    </LoggedInStack.Navigator>
  )
};

class RootNavigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            (this.props.isLoggedIn) ?
              <Stack.Screen
                name="Userdetails"
                component={LoggedInNavigator}
                options={{
                  title: 'My Profile',
                  headerTitleStyle: { color: Colors.White, fontSize: 25 },
                  headerStyle: { backgroundColor: Colors.Black },
                }}
              />
              :
              <Stack.Screen name="HomePage" options={{ headerShown: false }} component={AuthNavigator} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(RootNavigator);