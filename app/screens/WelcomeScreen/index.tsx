import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useStyle} from './styles';
import {grantCameraPermission} from 'utils/permissionManager';
import {useDispatch} from 'react-redux';
// import { grantCameraPermission } from "utils/permissionManager";
import {teamName} from 'store/slice/userSlice';
import {useNavigation} from '@react-navigation/native';
const WelcomeScreen = () => {
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
      <View style={styles.txtInput}>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          placeholder="Team Name (Optional)"
        />
      </View>
      <TouchableOpacity onPress={onStart} style={styles.btn}>
        <Text style={styles.btnTxt}>Start Innings</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WelcomeScreen;
