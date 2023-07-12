import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import Home from '../../src/Screen/Home';
// root stack
const RootStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>

     
      <RootStack.Screen name="Home" component={Home} />

    </RootStack.Navigator>
  );
};

export default MainStack;
