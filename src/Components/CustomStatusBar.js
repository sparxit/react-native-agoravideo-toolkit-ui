import React from 'react';
import { Dimensions, Platform, StatusBar, View } from 'react-native';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height >= 812
      ? 50
      : 20
    : StatusBar.currentHeight;

const StatusBarPlaceHolder = props => {
  const {color, barStyle} = props;
  return (
    <View
      style={{
        height: STATUS_BAR_HEIGHT,
        backgroundColor: color,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
      <StatusBar backgroundColor={color} barStyle={barStyle}/>
    </View>
  );
};

export default StatusBarPlaceHolder;
