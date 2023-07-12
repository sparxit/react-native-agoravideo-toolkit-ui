import { StyleSheet, I18nManager, Platform, Dimensions } from 'react-native';
import Colors from './Colors';
import Fonts from './CustomFont';
import {
  Dimension,
  commonAlignSelf,
  commonJustifyContent,
  commonAlignItem,
  commonTextAlign,
} from './Dimension';
const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RenderHTML, {
  HTMLElementModel,
  HTMLContentModel,
  } from 'react-native-render-html';
// common styles which can be used anywhere
export const commonStyles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    backgroundColor: 'white',

  },
  headerRowStyle: {
    width: '100%',
    alignItems: commonAlignItem.center,
    flexDirection: 'row',
    height: Dimension.commonHeader.headerHeight,

    // width: Dimension.commonHeader.headerWidth,
    backgroundColor: Dimension.commonHeader.headerBackGroundColor,
  },
  backImageContainer: {
    height: Dimension.commonHeader.backImageContainerHeight,
    width: Dimension.commonHeader.backImageContainerWidth,
    // marginHorizontal: 15,
    justifyContent: commonJustifyContent.center,
    alignItems: commonAlignItem.center,
    transform: I18nManager.isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }],
  },
  backImageStyle: {
    height: Dimension.commonHeader.backImageHeight,
    width: Dimension.commonHeader.backImageWidth,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimension.commonHeader.headerHeight,
    // marginHorizontal: 5,
  },
  titleText: {
    fontSize: 20,
    alignSelf: commonAlignSelf.center,
    fontFamily: Fonts.RobotoRegular,
    color: Colors.navyBlue,
    fontWeight: '700'
  },
  headerTxtContainer: {
    flexDirection: 'row',
    justifyContent: commonJustifyContent.flexEnd,
    alignItems: commonJustifyContent.flexEnd,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 19,
    // fontFamily: Fonts.GilroyBold,
    color: Colors.black,
  },
  buttonContaioner: {
    backgroundColor: Dimension.commonButton.buttonColor,
    width: '86%',
    alignSelf: 'center',
    height: Dimension.commonButton.buttonHeight,
    justifyContent: commonJustifyContent.center,
    alignItems: commonAlignItem.center,
    borderRadius: Dimension.commonButton.buttonRadius,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: Dimension.commonButton.buttonFontSize,
    fontWeight: '500',
    color: Dimension.commonButton.buttonTextColor,
  },
  buttonImageStyle: {
    width: Dimension.commonButton.buttonImageWidth,
    height: Dimension.commonButton.buttonImageHeight,
  },
  defaultText: {
    fontSize: Dimension.commonDefaultText.defaultsize,
    color: Dimension.commonDefaultText.defaultTextColor,
    fontFamily: Fonts.RobotoRegular,
    alignSelf: commonAlignSelf.center,
  },
  subTitleText: {
    fontSize: Dimension.commonSubTitleText.size,
    color: Dimension.commonSubTitleText.textColor,
    // fontFamily: Fonts.PoppinsMedium,
  },

  imageContainer: {
    width: Dimension.commonImage.imageContainerWidth,
    height: Dimension.commonImage.imageContainerHeight,
    // marginHorizontal: 20,
    justifyContent: commonJustifyContent.center,
    alignItems: commonAlignItem.center,
    borderRadius: Dimension.commonImage.imageContainerBorderRadius,
  },
  imageStyle: {
    width: Dimension.commonImage.imageWidth,
    height: Dimension.commonImage.imageHeight,
    borderRadius: Dimension.commonImage.imageBorderRadius,
    // backgroundColor: Colors.lightWhite,
    marginHorizontal: 8,
  },
  txtInputMainContaioner: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: Dimension.commonTextInput.inputBorderRadius,
    backgroundColor: Dimension.commonTextInput.textInputBackGroundColor,
    marginTop: 5,
    height: Dimension.commonTextInput.inputHeight,
    width: Dimension.commonTextInput.inputWidth,
  },

  txtInputText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: Dimension.commonTextInput.textInputFontSize,
    color: Dimension.commonTextInput.inputTextColor,
    textAlign: commonTextAlign.left,
    paddingHorizontal: 10,
    flex: 1,
  },
  txtInputContainer: {
    alignSelf: commonAlignSelf.center,
    flexDirection: 'row',
    alignItems: commonAlignItem.center,
    justifyContent: commonJustifyContent.spaceBetween,
    height: Dimension.commonTextInput.inputHeight,
    width: Dimension.commonTextInput.inputWidth,
    borderWidth: 2,
    borderColor: Colors.stroke,
    borderRadius: Dimension.commonTextInput.inputBorderRadius,
  },

  errorTextStyle: {
    color: Colors.red,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    marginHorizontal: 35, marginVertical: 5
  },
  loaderStyle: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: commonAlignItem.center,
    justifyContent: commonJustifyContent.center,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  pickerView: {
    fontSize: 14,
    color: '#9F9F9F',
    height: 42,
    borderWidth: 1.2,
    borderColor: '#9F9F9F',
    borderRadius: 8,
    width: '50%',
    marginHorizontal: 2,
    justifyContent: 'center',
  },
  bottomsheetContainer: {
    backgroundColor: '#fff',
  },
  txtbottom: {
    fontSize: 18,
    marginHorizontal: 15,
    color: Colors.blue,
    // fontFamily: Fonts.PoppinsMedium,
    marginTop: 10,
    textAlign: commonTextAlign.center,
  },
  optionView: {
    flexDirection: 'row',
    alignItems: commonAlignItem.center,
    justifyContent: 'space-between',
    paddingLeft: 12,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 15,
    paddingLeft: 10,
    // fontFamily: PoppinsRegular,
  },
  chooseContainer: {
    flexDirection: 'row',
    justifyContent: commonJustifyContent.spaceBetween,
    marginHorizontal: 10,
    padding: 10,
  },
  cancelBottomSheet: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black,
    fontSize: 17,
  },
  chooseOptions: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.orange,
    fontSize: 15,
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: commonJustifyContent.flexStart,
    height: 50,
    borderRadius: 15,
    alignSelf: commonAlignSelf.center,
    alignItems: commonAlignItem.center,

    backgroundColor: Colors.offgrey,
  },
  rowStyle: {
    alignItems: commonAlignItem.center,
    backgroundColor: Colors.white,
  },
  rowView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: commonAlignItem.center,
  },
  flagImage: {
    width: 35,
    height: 30,
    alignSelf: commonAlignSelf.center,
  },
  countryName: {
    flex: 1,
    marginStart: 20,
    color: Colors.darkblack,
    fontSize: 16,
    // fontFamily: Fonts.PoppinsSemiBold,
  },
  countryCode: {
    color: Colors.grey,
    fontSize: 16,
    // fontFamily: Fonts.PoppinsRegular,
  },
  focusedIndicatorView: {
    height: 4,
    width: 100,
    top: 15,
    backgroundColor: Colors.theme,
  },
  unFocusedIndicatorView: {
    height: 4,
    width: 100,
    top: 15,
    backgroundColor: Colors.white,
  },
  bottomTabStyle: {
    // borderTopRightRadius: IS_ANDROID ? 20 : 25,
    // borderTopLeftRadius: IS_ANDROID ? 20 : 25,
    // position: 'absolute',
  },
  eyeIconView: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 8
  },
  eyeIcon: {
    height: 20,
    width: 20,
  },
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  loaderSubContainer: {
    padding: 10,
    position: 'absolute',
  },
  imageTitleContainer: {
    width: Dimension.commonTitleImage.imageWidth,
    height: Dimension.commonTitleImage.imageHeight,
    justifyContent: commonJustifyContent.center,
    alignItems: commonAlignItem.center,
    marginTop: 10,
  },
  imageTitleStyle: {
    alignSelf: commonAlignSelf.center,
  },
  toastStyle: {
    backgroundColor: Colors.lightgrey,
    paddingLeft: 15,
    paddingRight: 15,
  },
  toastTextStyle: {
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.white,
  },
  Contaiiner: {
    height: 30,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    marginLeft: 15,
    width: '95%',
  },
  titleDivider: {
    fontSize: 20,
    flex: 1,
    fontFamily: Fonts.RobotoMedium,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },

  viewalltxt: {
    color: Colors.orange,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,
    alignSelf: 'center',
    marginHorizontal: 5,
    textDecorationLine: 'underline',
  },
  searchConatiner: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: 'center',
  }, htmlstyle: {
    a: {
      color: 'black', fontSize: 16,
      lineHeight: 23,
    },
    p: HTMLElementModel.fromCustomModel({
      tagName: 'p',
      mixedUAStyles: {
         alignSelf: 'center',
         color: 'red',
         marginTop: 10,
         marginBottom: 10,
         paddingHorizontal:10
      },
      contentModel: HTMLContentModel.block,
     }),
    
    em: {
      margin: 0, padding: 0, border: 0,
      outline: 0, background: 'transparent'
    },
    
    body: {
      whiteSpace: 'normal',
      color: 'black',
      overflow: 'hidden',
      wrapper: 'Text',

    },
  }
});
