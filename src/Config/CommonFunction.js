import {Alert, Linking, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {check, request} from 'react-native-permissions';

export const connectionData = {
  appId: '4f85c47e863843389344acc40f5a1792',
  channel: 'test',
  recordStatus: true,
};

export const checkAudioPermission = async () => {
  let isRequsted;


  const permissions =
    Platform.OS == 'ios'
      ? 'ios.permission.MICROPHONE'
      : 'android.permission.RECORD_AUDIO';
  // this.setState({isGrantedPermission: true});
  const isGrant = await check(permissions);
  // this.setState({isGrantedPermission: true});
  if (isGrant !== 'granted') {
    isRequsted = await request(permissions);

    //  alert(isRequsted)
    if (isRequsted == 'granted') {
      // this.setState({isGrantedPermission: true});
    } else if (isRequsted == 'blocked') {
      Alert.alert(
        'Alert',
        'You need to allow microphone permission for access microphone',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
  }
  return isGrant !== 'granted' ? isRequsted : isGrant;
};

export const checkCameraPermission = async () => {
  let isRequsted;

  const apiLevel = await DeviceInfo.getApiLevel();

  const permissions =
    Platform.OS == 'ios'
      ? 'ios.permission.CAMERA'
      : 'android.permission.CAMERA';

  //  check permission
  const isGrant = await check(permissions);

  if (isGrant !== 'granted') {
    isRequsted = await request(permissions);
    console.log(isRequsted);
    if (isRequsted == 'granted') {
    } else if (isRequsted == 'blocked') {
      Alert.alert(
        'Alert',
        'You need to allow camera permission for access camera',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
  }
  return isGrant !== 'granted' ? isRequsted : isGrant;
};

export const checkRecordPermission = async () => {
  let isRequsted;
  const apiLevel = await DeviceInfo.getApiLevel();

  const permissions =
    Platform.OS == 'ios'
      ? 'ios.permission.MEDIA_LIBRARY'
      : apiLevel > 31
      ? 'android.permission.READ_MEDIA_AUDIO'
      : 'android.permission.WRITE_EXTERNAL_STORAGE';

  //  check permission
  const isGrant = await check(permissions);

  if (isGrant !== 'granted') {
    isRequsted = await request(permissions);
    console.log(isRequsted);
    if (isRequsted == 'granted') {
    } else if (isRequsted == 'blocked') {
      Alert.alert(
        'Alert',
        'You need to allow media permission for media access for recording',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
  }
  return isGrant !== 'granted' ? isRequsted : isGrant;
};
