import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useStyle} from './styles';
import {grantCameraPermission} from 'utils/permissionManager';
// import { grantCameraPermission } from "utils/permissionManager";

const ContactUs = () => {
  const styles = useStyle();
  useEffect(() => {
    grantCameraPermission();
  });
  return (
    <View>
      <Text> Welcome ContactUs Screen</Text>
    </View>
  );
};
export default ContactUs;
