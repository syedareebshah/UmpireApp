import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useStyle} from './styles';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
// import FastImage from 'react-native-fast-image';
import {Controller, useForm} from 'react-hook-form';
import {onLogin} from 'store/slice/userSlice';
import {CustomTextInput} from 'components/CustomTextInput';
import {CustomButton} from 'components/CustomButton';
import icons from 'utils/icons';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
import {loginService} from 'services/loginService';
const schema = yup
  .object({
    email: yup
      .string()
      .email('ValidationSchema.emailNotValid')
      .required('ValidationSchema.emailRequired'),
    password: yup.string().required('ValidationSchema.passRequired'),
  })
  .required();
const Login = () => {
  const styles = useStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async () => {
    try {
      // const response = await loginService();
      // console.log(response?.data);
      dispatch(onLogin({}));
      // return jsonData; // Return the data if needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="Email"
            placeholder="Enter email"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            inputRef={ref}
            onBlur={onBlur}
            autoCapitalize="none"
            onChangeText={value => onChange(value.trimStart().trim())}
            leftIcon={() => (
              <FastImage
                style={{marginStart: vs(6), height: vs(20), width: vs(20)}}
                source={icons.aboutUsIcon}
                tintColor={'blue'}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
            onSubmitEditing={() => setFocus('password')}
            isError={errors?.email ? true : false}
          />
        )}
        name="email"
      />
      {errors?.email && (
        <Text style={styles.errorText}>{t(errors?.email?.message)}</Text>
      )}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, ref, value}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="Password"
            placeholder="Enter password"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            onChangeText={value => onChange(value.trimStart().trim())}
            password={true}
            onBlur={onBlur}
            inputRef={ref}
            onSubmitEditing={handleSubmit(onSubmit)}
            isError={errors?.password ? true : false}
          />
        )}
        name="password"
      />
      {errors?.password && (
        <Text style={styles.errorText}>{t(errors?.password?.message)}</Text>
      )}
      <CustomButton
        containerStyle={{marginTop: s(16)}}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
export default Login;
