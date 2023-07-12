import AgoraUIKit from 'react-native-agoravideo-toolkit-ui';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Linking,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {check, request} from 'react-native-permissions';
import RecordScreen from 'react-native-record-screen';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {
  checkCameraPermission,
  checkRecordPermission,
  connectionData,
  checkAudioPermission,
} from '../../Config/CommonFunction';
import Colors from '../../Utils/Colors';
var RNFS = require('react-native-fs');

const Home = props => {
  const [videoCall, setVideoCall] = useState(false);
  const [meetingId, setMeetingId] = useState({
    appId: '',
    channel: 'test',
  });
  const [recording, setRecording] = useState(false);

  var saveDirectory = '';

  let res = '';

  // call back for record and end button
  const rtcCallbacks = {
    EndCall: async () => {
      setVideoCall(false);
      // recording stop
    },
    RecordCall: async () => {
      if (recording == false) {
        await setRecording(true);

        const res = RecordScreen.startRecording().catch(error =>
          console.error(error),
        );
        if (res === RecordingStartResponse.PermissionError) {
          // user denies access
        }
      } else {
        res = await RecordScreen.stopRecording().catch(error =>
          console.warn(error),
        );
        console.log('=====resssss>', res);

        let url = '';
        if (res) {
          url = res.result.outputURL;
          console.log('=====5555555>', url);
        }
        setRecording(false);

        Alert.alert('Alert Title', 'You want to save recording', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              checkPermission(1, url);
              alertFun(url);
            },
          },
        ]);
      }
    },
  };

  // checkPermission for android
  const checkPermission = async (type, filePath) => {
    let status = await checkAudioPermission();
    let status1 = await checkCameraPermission();
    let status2 = await checkRecordPermission();

    if (status == 'granted' && status1 == 'granted' && status2 == 'granted') {
      if (type == 1) {
        saveDirectory = RNFS.DownloadDirectoryPath;
        console.log('Permission given+ ', saveDirectory);
        saveRecordingAndroid(filePath);
      } else setVideoCall(true);
    }
  };

  // save android record video
  const saveRecordingAndroid = async filePath => {
    let file = filePath.split('/');
    let fileName = file[file.length - 1];
    console.log('====>>>', fileName);

    await RNFS.mkdir(RNFS.DownloadDirectoryPath + '/AgoraFile/');
    RNFS.readDir(RNFS.DownloadDirectoryPath + '/AgoraFile/' + fileName).then(
      data => {
        console.log('data is===', data);
      },
    );
    RNFS.copyFile(
      filePath,
      RNFS.DownloadDirectoryPath + '/AgoraFile/' + fileName,
    );
  };

  // alert for saved path of recorded video
  const alertFun = filePath => {
    let file = filePath.split('/');
    let fileName = file[file.length - 1];
    console.log(RNFS.DownloadDirectoryPath + '/AgoraFile/' + fileName);
    Alert.alert(
      'Alert Title',
      'Video recording saved at location :' +
        '\n' +
        (Platform.OS == 'android'
          ? RNFS.DownloadDirectoryPath + '/AgoraFile/' + fileName
          : filePath),
      [
        {
          text: 'OK',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar color={'white'} barStyle={'dark-content'} />

      {videoCall ? (
        <AgoraUIKit
          connectionData={connectionData}
          rtcCallbacks={rtcCallbacks}
          styleProps={{
            BtnTemplateContainer: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        />
      ) : (
        <View style={{justifyContent: 'center', marginHorizontal: 30, flex: 1}}>
          <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
            Join meeting
          </Text>

          <View style={{flexDirection: 'row', width: '90%'}}>
            <TextInput
              placeholder="Enter Meeting Id"
              placeholderTextColor={Colors.greyish}
              onChangeText={data => setMeetingId({appId: data})}
              style={{
                height: 48,
                width: '75%',
                paddingLeft: 10,
                color: Colors.grey,
                borderWidth: 1,
                borderColor: Colors.lightGrey,
                borderRadius: 10,
                marginTop: 15,
                paddingHorizontal: 15,
              }}
              maxLength={80}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={meetingId}
            />
            <TouchableOpacity
              onPress={() => {
                // recording start
                const res = RecordScreen.startRecording().catch(error =>
                  console.error(error),
                );
                if (res === RecordingStartResponse.PermissionError) {
                  // user denies access
                }
                setVideoCall(true);
              }}
              style={{
                backgroundColor: Colors.darkBlue,
                width: '30%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                borderRadius: 15,
                marginHorizontal: 15,
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              checkPermission(0, '');
            }}
            style={{
              backgroundColor: Colors.darkBlue,
              width: '60%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 15,
            }}>
            <Text>Join Call without id</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Home;
