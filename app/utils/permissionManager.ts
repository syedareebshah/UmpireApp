import {Alert, Platform} from 'react-native';
import Permissions, {PERMISSIONS, openSettings} from 'react-native-permissions';
// import DeviceInfo from 'react-native-device-info';
export const grantLocationPermission = (callbackFunction: () => void) => {
  Permissions.checkMultiple(
    Platform.OS === 'ios'
      ? [
          'ios.permission.LOCATION_WHEN_IN_USE',
          'ios.permission.LOCATION_ALWAYS',
        ]
      : [
          'android.permission.ACCESS_FINE_LOCATION',
          'android.permission.ACCESS_COARSE_LOCATION',
        ],
  )
    .then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      // console.log('responce is: ', response);
      if (
        response['android.permission.ACCESS_COARSE_LOCATION'] != 'granted' ||
        response['android.permission.ACCESS_FINE_LOCATION'] != 'granted' ||
        (response['ios.permission.LOCATION_WHEN_IN_USE'] !== 'granted' &&
          response['ios.permission.LOCATION_ALWAYS'] !== 'granted')
      ) {
        if (
          Platform.OS === 'ios' &&
          response['ios.permission.LOCATION_WHEN_IN_USE'] === 'blocked' &&
          response['ios.permission.LOCATION_ALWAYS'] !== 'granted'
        ) {
          showAlertForBlockedPermissions('location');
          return;
        }
        Permissions.requestMultiple(
          Platform.OS === 'ios'
            ? [
                'ios.permission.LOCATION_WHEN_IN_USE',
                'ios.permission.LOCATION_ALWAYS',
              ]
            : [
                'android.permission.ACCESS_FINE_LOCATION',
                'android.permission.ACCESS_COARSE_LOCATION',
              ],
        )
          .then(response1 => {
            if (
              Platform.OS == 'android' &&
              response1['android.permission.ACCESS_COARSE_LOCATION'] ==
                'granted' &&
              response1['android.permission.ACCESS_FINE_LOCATION'] == 'granted'
            ) {
              callbackFunction();
            } else if (
              Platform.OS == 'ios' &&
              (response1['ios.permission.LOCATION_WHEN_IN_USE'] == 'granted' ||
                response1['ios.permission.LOCATION_ALWAYS'] == 'granted')
            ) {
              callbackFunction();
            }
          })
          .catch(error => {
            console.log('1111', error);
          });
      } else {
        callbackFunction();
      }
    })
    .catch(error => {
      console.log('permission check error: ', error);
    });
};

export const grantStoreDownloadedDocumentPermission = (
  callbackFunction: () => void,
) => {
  if (parseFloat(DeviceInfo.getSystemVersion()) >= 11) {
    return callbackFunction();
  }
  Permissions.check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    .then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'

      if (response != 'granted') {
        Permissions.request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
          .then(response1 => {
            console.log('responce is: ', response1);

            if (response1 == 'granted') {
              callbackFunction();
            } else {
              permissionAlert();
            }
          })
          .catch(error => {
            console.log('1111', error);
          });
      } else {
        callbackFunction();
      }
    })
    .catch(error => {
      console.log('permission check error: ', error);
    });
};
export const grantMediaRelatedPermissions = (
  callbackFunction: () => void = () => {},
) => {
  if (Platform.OS == 'ios') {
    Permissions.checkMultiple([
      'ios.permission.CAMERA',
      'ios.permission.PHOTO_LIBRARY',
      'ios.permission.MEDIA_LIBRARY',
    ])
      .then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        // console.log('responce is: ', response);
        if (
          response['ios.permission.CAMERA'] != 'granted' ||
          response['ios.permission.MEDIA_LIBRARY'] !== 'granted' ||
          response['ios.permission.PHOTO_LIBRARY'] !== 'granted'
        ) {
          //check if blocked
          if (
            response['ios.permission.CAMERA'] === 'blocked' ||
            response['ios.permission.MEDIA_LIBRARY'] === 'blocked' ||
            response['ios.permission.PHOTO_LIBRARY'] === 'blocked'
          ) {
            showAlertForBlockedPermissions('media');
            return;
          }
          Permissions.requestMultiple([
            'ios.permission.CAMERA',
            'ios.permission.PHOTO_LIBRARY',
            'ios.permission.MEDIA_LIBRARY',
          ])
            .then(response1 => {
              let success = false;
              if (response1['ios.permission.CAMERA'] == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (response1['ios.permission.MEDIA_LIBRARY'] == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (response1['ios.permission.PHOTO_LIBRARY'] == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (success) callbackFunction();
            })
            .catch(error => {
              console.log('1111', error);
            });
        } else {
          callbackFunction();
        }
      })
      .catch(error => {
        console.log('permission check error: ', error);
      });
  } else {
    Permissions.checkMultiple([
      'android.permission.CAMERA',
      'android.permission.READ_MEDIA_IMAGES',
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE',
    ])
      .then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        // this.setState({ photoPermission: response })
        // console.log('responce is: ', response);
        if (
          response['android.permission.CAMERA'] != 'granted' ||
          response['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted' ||
          response['android.permission.READ_MEDIA_IMAGES'] !== 'granted'
        ) {
          Permissions.requestMultiple([
            'android.permission.CAMERA',
            'android.permission.READ_MEDIA_IMAGES',
            'android.permission.READ_EXTERNAL_STORAGE',
          ])
            .then(response1 => {
              let success = false;
              if (response1['android.permission.CAMERA'] == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (
                response1['android.permission.READ_MEDIA_IMAGES'] == 'granted'
              ) {
                // console.log('granted');
                success = true;
              }
              if (
                response1['android.permission.READ_EXTERNAL_STORAGE'] ==
                'granted'
              ) {
                // console.log('granted');
                success = true;
              }
              if (success) callbackFunction();
            })
            .catch(error => {
              console.log('1111', error);
            });
        } else {
          callbackFunction();
        }
      })
      .catch(error => {
        console.log('permission check error: ', error);
      });
  }
};
export const grantCameraPermission = (
  callbackFunction: () => void = () => {},
) => {
  if (Platform.OS == 'ios') {
    Permissions.check('ios.permission.CAMERA')
      .then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        // console.log('responce is: ', response);
        if (response != 'granted') {
          //check if blocked
          if (response === 'blocked') {
            showAlertForBlockedPermissions('camera');
            return;
          }
          Permissions.request('ios.permission.CAMERA')
            .then(response1 => {
              let success = false;
              if (response1 == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (success) callbackFunction();
            })
            .catch(error => {
              console.log('1111', error);
            });
        } else {
          callbackFunction();
        }
      })
      .catch(error => {
        console.log('permission check error: ', error);
      });
  } else {
    Permissions.check('android.permission.CAMERA')
      .then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        // this.setState({ photoPermission: response })
        // console.log('responce is: ', response);
        if (response != 'granted') {
          Permissions.request('android.permission.CAMERA')
            .then(response1 => {
              let success = false;
              if (response1 == 'granted') {
                // console.log('granted');
                success = true;
              }
              if (success) callbackFunction();
            })
            .catch(error => {
              console.log('1111', error);
            });
        } else {
          callbackFunction();
        }
      })
      .catch(error => {
        console.log('permission check error: ', error);
      });
  }
};
const showAlertForBlockedPermissions = (permissionsType: string) => {
  if (permissionsType === 'location') {
    Alert.alert('Permissions Alert!', 'Permissions Blocked for Location!', [
      {
        text: 'Allow',
        onPress: () => openSettings(),
      },
      {
        text: 'Deny',
        onPress: () => {},
      },
    ]);
  } else if (permissionsType === 'media') {
    Alert.alert(
      'Permissions Alert!',
      'Permissions Blocked for Camera/Photos Library!',
      [
        {
          text: 'Allow',
          onPress: () => openSettings(),
        },
        {
          text: 'Deny',
          onPress: () => {},
        },
      ],
    );
  } else if (permissionsType === 'contacts') {
    Alert.alert(
      'Permissions Alert!',
      'Permissions Blocked for read Contacts!',
      [
        {
          text: 'Allow',
          onPress: () => openSettings(),
        },
        {
          text: 'Deny',
          onPress: () => {},
        },
      ],
    );
  } else if (permissionsType === 'camera') {
    Alert.alert('Permissions Alert!', 'Permissions Blocked for Camera!', [
      {
        text: 'Allow',
        onPress: () => openSettings(),
      },
      {
        text: 'Deny',
        onPress: () => {},
      },
    ]);
  }
};

export const checkContactsPermissions = (callbackFunction: () => void) => {
  Permissions.check(
    Platform.OS === 'ios'
      ? 'ios.permission.CONTACTS'
      : 'android.permission.READ_CONTACTS',
  )
    .then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      // this.setState({ photoPermission: response })
      // console.log('responce is: ', response);
      if (response != 'granted') {
        if (Platform.OS === 'ios' && response === 'blocked') {
          showAlertForBlockedPermissions('contacts');
          return;
        }
        Permissions.request(
          Platform.OS === 'ios'
            ? 'ios.permission.CONTACTS'
            : 'android.permission.READ_CONTACTS',
        )
          .then(response1 => {
            if (response1 == 'granted') {
              callbackFunction();
            }
          })
          .catch(error => {
            console.log('contacts_permission check error', error);
          });
      } else {
        callbackFunction();
      }
    })
    .catch(error => {
      console.log('contacts_permission check error: ', error);
    });
};
