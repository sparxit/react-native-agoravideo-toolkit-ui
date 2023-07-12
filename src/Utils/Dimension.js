import {Dimensions, Platform} from 'react-native';
const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('screen');
import Colors from './Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// common dimension for styles

export var commonAlignSelf = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
};

export var commonJustifyContent = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
};

export var commonAlignItem = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
};

export var commonTextAlign = {
  center: 'center',
  left: 'left',
  right: 'right',
};

export var Dimension = {
  commonButton: {
    buttonFontSize: 17,
    buttonWidth: '84%',
    buttonHeight: 48,
    buttonRadius: 5,
    buttonColor: Colors.darkBlue,
    buttonImageWidth: 15,
    buttonImageHeight: 15,
    buttonTextColor: 'white',
  },
  commonDefaultText: {
    defaultsize: 16,
    defaultTextColor: Colors.black,
  },
  commonSubTitleText: {
    size: 12,
    textColor: Colors.black,
  },
  commonImage: {
    imageBackGroundColor: Colors.grey,
    imageContainerWidth: 30,
    imageContainerHeight: 30,
    imageContainerBorderRadius: 0,
    imageWidth: 20,
    imageHeight: 20,
    imageBorderRadius: 0,
  },
  commonHeader: {
    headerHeight: IS_IOS ? 75 : 60,
    headerBackGroundColor: Colors.theme,
    headerBackGroundColor: Colors.theme,
    headerWidth: viewportWidth,
    flexDirection: 'row',
    backImageContainerWidth: wp('15%'),
    backImageContainerHeight: 30,
    backImageHeight: 30,
    backImageWidth: wp('15%'),
  },
  commonTextInput: {
    inputBorderRadius: 8,
    textInputBackGroundColor: Colors.white,
    textInputFontSize: 14,
    inputTextColor: Colors.darkblack,
    inputWidth: viewportWidth / 1 - 40,
    inputHeight: 55,
  },
  commonTitleImage: {
    imageWidth: '100%',
    imageHeight: viewportHeight / 6,
    width: viewportWidth / 2,
    height: viewportHeight / 5,
  },
  commonButtonContainerStyle: {
    backgroundColor: Colors.black,
    width: '90%',
    height: 48,
    borderRadius: 40,
  },
};
