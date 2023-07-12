import moment from 'moment';
import React from 'react';
import { FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Toast from 'react-native-root-toast';
import Colors from '../Utils/Colors';
import { commonStyles } from '../Utils/CommanStyles';
import {
  calender,
  document,
  mobile,
  placeHolder,
  provider,
  star,
  support,
  timer,
  videoCall
} from '../Utils/Icon';
import { downloadFile } from '../Config/CommanFunctions';
export const DefaultText = props => {
  const { defaultTextStyle, text, description, press } = props;

  return (
    <Text
      onPress={press}
      style={[commonStyles.defaultText, defaultTextStyle]}
      numberOfLines={description ? 4 : 1}
      lineBreakMode
      {...props}>
      {text}
    </Text>
  );
};

const Circle = colorType => {
  return (
    <View
      style={{
        width: 18,
        height: 18,
        backgroundColor: colorType ? Colors.orange : Colors.shadowGrey,
        borderRadius: 20,
      }}
    />
  );
};

const Line = colorType => {
  return (
    <View
      style={{
        width: '40%',
        height: 2,
        backgroundColor: colorType ? Colors.orange : Colors.shadowGrey,
      }}
    />
  );
};

export const Status = props => {
  const { text, text1, text2, statusValue, statusValue1, statusValue2 } = props;

  return (
    <View
      style={{
        justifyContent: 'center',
        width: '93%',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {Circle(statusValue)}
        {Line(statusValue1)}
        {Circle(statusValue1)}
        {Line(statusValue2)}
        {Circle(statusValue2)}
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 12,
            right: 8,
            fontWeight: statusValue ? '600' : '',
            color: statusValue ? Colors.black : Colors.lightGrey,
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 12,
            left: 5,
            fontWeight: statusValue1 ? '600' : '',
            color: statusValue1 ? Colors.black : Colors.lightGrey,
          }}>
          {text1}
        </Text>
        <Text
          style={{
            left: 10,
            fontSize: 12,
            fontWeight: statusValue2 ? '600' : '',
            color: statusValue2 ? Colors.black : Colors.lightGrey,
          }}>
          {text2}
        </Text>
      </View>
    </View>
  );
};

export const SessionDetail = props => {
  const {
    array,
    doctorData,
    ratingReviewGiven,
    medicalRecords,
    assignedStatus,
    rating,
    review,
    navigation,
    details,
    providerStatus,
    providerParmas,
    join,
    getTokenBtn
  } = props;
  var isCancle = details?.appointment_cancel === 'yes' ? true : false;
  var isComplete = details?.appointment_complete === 'yes' ? true : false;
  var currentTime = moment().format('MM/DD/YYYY HH:mm:ss');


  var isFutureAppointment =
    !isCancle &&
      !isComplete &&
      currentTime <
      moment(details.start_date_time)
        .subtract('5', 'minutes')
        .format('MM/DD/YYYY HH:mm:ss')
      ? true
      : false;


  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: assignedStatus ? 20 : 0,
        paddingTop: assignedStatus ? 0 : 20,
      }}>
      {assignedStatus == 'assigned' || assignedStatus == 'completed' ?
        <>
          <View
            style={{
              backgroundColor: '#FFF6EE',
              paddingHorizontal: 15,
              flexDirection: 'row',
              height: 80,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 10 }}

            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={doctorData.image != null ? {
                  uri:
                    doctorData.image
                } : placeHolder}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginHorizontal: 8,
              }}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  fontSize: 18,
                  color: Colors.blackish,
                  fontWeight: '600',
                  lineHeight: 30,
                }}>
                {doctorData.first_name + ' ' + doctorData.last_name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{
                  fontSize: 12,
                  color: Colors.grey,
                  fontWeight: '600',
                }}>
                {details.service.service_category.title}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('TherapistDetail', {
                providerData: details, detail: {
                  is_upcoming_session: [
                    {
                      preffered_session_mode: details.preffered_session_mode
                    }
                  ]
                }
              })}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: Colors.darkBlue,
                borderRadius: 8,
              }}>
              <Text style={{ color: Colors.white, fontSize: 12 }}>
                {'View Profile'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              margin: 10, flex: 1

            }}>
            {doctorData.rating != null && <View
              style={{
                flexDirection: 'row',
                borderColor: Colors.darkBlue,
                borderRadius: 8,
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image
                style={{ width: 15, height: 15 }}
                resizeMode={'contain'}
                source={star}
              />
              <Text
                style={{
                  color: Colors.darkBlue,
                  fontSize: 12,
                  marginHorizontal: 5,
                  fontWeight: '500',
                }}>
                {doctorData.rating}
              </Text>
            </View>}
            <View style={{ flex: 1 }}>

            </View>
            {assignedStatus == 'assigned' &&  !join &&<>
              {details?.request_for_change == null || details?.request_for_change.status == 'Reject' ||details?.request_for_change.status == 'Accept'? <TouchableOpacity
                onPress={() => providerStatus(true)}
                style={{
                  flexDirection: 'row',
                  borderColor: Colors.darkBlue,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                  style={{ alignSelf: 'center' }}
                  resizeMode={'contain'}
                  source={provider}
                />
                <Text
                  style={{
                    color: Colors.darkBlue,
                    fontSize: 13,
                    marginHorizontal: 5,
                  }}>
                  {'Change Therapist'}
                </Text>
              </TouchableOpacity>
                :
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.darkBlue,
                    borderRadius: 8,
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  {/* <Image
            style={{ alignSelf: 'center' }}
            resizeMode={'contain'}
            source={provider}
          /> */}
                  <Text
                    style={{
                      color: Colors.darkBlue,
                      fontSize: 13,
                      marginHorizontal: 5,
                    }}>
                    {'Change therapist status pending'}
                  </Text>
                </View>

              }

            </>

            }

          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center'
            }}>
            <Text style={{ width: '70%', fontSize: 14, color: Colors.greyish }}>
              {details.service.title}
            </Text>

            {
              assignedStatus == 'assigned' &&
              <>
                {details.preffered_session_mode == 'Video' ?
                  <>
                    <TouchableOpacity onPress={() => {
                      if (assignedStatus != 'completed') {
                        isFutureAppointment ?
                          Toast.show('Your session is yet to start', {
                            duration: Toast.durations.LONG,
                            position: Toast.positions.BOTTOM
                          }) :
                          join ? getTokenBtn(details, 'audio') :
                            Toast.show('Appointment time passed', {
                              duration: Toast.durations.LONG,
                              position: Toast.positions.BOTTOM
                            })
                      }
                    }}>
                      <Image style={{ tintColor: Colors.greyish }}
                        source={mobile} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      if (assignedStatus != 'completed') {
                        isFutureAppointment ?
                          Toast.show('Your session is yet to start', {
                            duration: Toast.durations.LONG,
                            position: Toast.positions.BOTTOM
                          }) :
                          join ? getTokenBtn(details, 'video') :
                            Toast.show('Appointment time passed', {
                              duration: Toast.durations.LONG,
                              position: Toast.positions.BOTTOM
                            })
                      }
                    }}>
                      <Image style={{ tintColor: Colors.greyish }} source={videoCall} />

                    </TouchableOpacity>
                  </> : <TouchableOpacity onPress={() => {
                    if (assignedStatus != 'completed') {
                      isFutureAppointment ?
                        Toast.show('Your session is yet to start', {
                          duration: Toast.durations.LONG,
                          position: Toast.positions.BOTTOM
                        }) : join ? getTokenBtn(details, 'audio') :
                          Toast.show('Appointment time passed', {
                            duration: Toast.durations.LONG,
                            position: Toast.positions.BOTTOM
                          })
                    }
                  }}>
                    <Image style={{ tintColor: Colors.greyish }}
                      source={mobile} />

                  </TouchableOpacity>
                }
              </>
            }
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChatInbox', {
                userId: doctorData.id,
                screenName: ''

              })}>
              <Image style={{ tintColor: Colors.greyish }}
                source={support} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 12,
              marginHorizontal: 10,
              borderStyle: 'dashed',
              borderColor: Colors.shadowGrey,
              borderWidth: 1,
            }}></View>
        </>
        : null}
      <FlatList
        data={array}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 15, paddingBottom: 10
        }}
        renderItem={({ item, index }) => renderData(item, index)}
      />

      {medicalRecords.length > 0 && (
        <>
          <View
            style={{
              marginVertical: 12,
              marginHorizontal: 10,
              borderStyle: 'dashed',
              borderColor: Colors.shadowGrey,
              borderWidth: 1,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginBottom: 12,
            }}>
            <Text style={{ width: '70%', fontSize: 16, color: Colors.mixOrange }}>
              {'Medical Records'}
            </Text>
            {/* <Image
              style={{
                tintColor: Colors.lightGrey,
                width: 18,
                height: 18,
                marginRight: 10,
              }}
              source={editIcon}
            /> */}
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingBottom: 10 }}>
            {medicalRecords.map(item => (
              <TouchableOpacity style={{ padding: 10 }}
                onPress={() => {
                  // if (Platform.OS == 'ios' && item.file_type == 'pdf') {
                  //   downloadFile(item.filename)
                  // } else {
                    props.navigation.navigate('Pdf', { uri: item.filename, file_type: item.file_type })
                  // }
                 

                }}>
                <Image
                  style={{ tintColor: Colors.lightGrey, width: 22, height: 22 }}
                  resizeMode="contain"
                  source={document}
                />
              </TouchableOpacity>

            ))}

            {/* <Image style={{ tintColor: Colors.lightGrey, marginHorizontal: 20, width: 22, height: 22 }}
         resizeMode='contain' source={document} /> */}
          </View>
        </>
      )}

      {ratingReviewGiven && (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginTop: 12,
            }}>
            <Text style={{ width: '70%', fontSize: 16, color: Colors.mixOrange }}>
              {'My Review'}
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('RateTherapist', { appointment_id: details.id })}>
              <Image
                style={{
                  tintColor: Colors.lightGrey,
                  width: 18,
                  height: 18,
                  marginRight: 10,
                }}
                source={editIcon}
              />
            </TouchableOpacity> */}

          </View>

          <Text style={{ marginHorizontal: 20, marginTop: 5, color: Colors.black, fontSize: 12 }}>{'You Rated:'}</Text>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <AirbnbRating
              size={15}
              reviews={''}
              defaultRating={rating}
              isDisabled={true}
              ratingContainerStyle={{
                width: 100, height: 10, justifyContent: 'center', alignItems: 'center'
              }}
              starImage={star}
              selectedColor="#FB8918"
              starContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
            />
            {review != null && <Text
              style={{
                color: Colors.grey,
                fontSize: 15,
                marginVertical: 15,
                lineHeight: 22,
              }}>
              {
                review
              }
            </Text>

            }
          </View>
        </View>
      )
      }
    </View>
  );
};
// render method for showing  countries
const renderData = (item, index) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
      }}>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={{
          width: '50%',
          fontSize: 15,
          fontWeight: '500',
          color: Colors.blackish,
        }}>
        {item.title}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode={'tail'}
        style={{
          width: '50%',
          textAlign: 'left',
          color: Colors.grey,
          lineHeight: 22,
        }}>
        {item.session}
      </Text>
    </View>
  );
};
// render method for showing  countries
export const TextWithViewAll = props => {
  const { title, viewAll } = props;
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 25,
        marginVertical: 5,
        marginTop: 15,
      }}>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={{
          flex: 1,
          fontSize: 17,
          fontWeight: '800',
          color: Colors.mixOrange,
        }}>
        {title}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode={'tail'}
        style={{
          fontSize: 15,
          textAlign: 'left',
          fontWeight: '600',
          color: Colors.darkBlue,
        }}>
        {viewAll}
      </Text>
    </View>
  );
};

export const DateTime = props => {
  const { date, time } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingVertical: 8,
        alignItems: 'center'
      }}>
      <Image
        style={{ width: 16, height: 16 }}
        resizeMode={'contain'}
        source={calender}
      />
      <Text style={{ fontSize: 12, color: Colors.blackish, marginLeft: 5 }}>
        {date}
      </Text>
      <Image
        style={{ width: 16, height: 16, marginHorizontal: 10 }}
        resizeMode={'contain'}
        source={timer}
      />
      <Text style={{ fontSize: 12, color: Colors.blackish }}>{time}</Text>
    </View>
  );
};


