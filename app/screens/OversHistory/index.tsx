import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStyle} from './styles';
import {grantCameraPermission} from 'utils/permissionManager';
import {useDispatch} from 'react-redux';
// import { grantCameraPermission } from "utils/permissionManager";
import {teamName} from 'store/slice/userSlice';
import {useNavigation} from '@react-navigation/native';
const OversHistory = () => {
  const styles = useStyle();
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onStart = () => {
    dispatch(
      teamName({
        name,
      }),
    );
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>1234567890</Text>
          <Text>1234567890</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={onStart} style={styles.btn}>
        <Text style={styles.btnTxt}>Start Over</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OversHistory;
