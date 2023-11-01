import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {CustomTextInput} from '../../components/CustomTextInput';
import {useStyle} from './styles';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {useTheme} from 'react-native-paper';
import {CustomButton} from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import icons from '../../utils/icons';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
const schema = yup
  .object({
    email: yup
      .string()
      .email('ValidationSchema.emailNotValid')
      .required('ValidationSchema.emailRequired'),
    password: yup.string().required('ValidationSchema.emailRequired'),
    confirmPassword: yup
      .string()
      .required('ValidationSchema.confirmNewPassRequired'),
    name: yup.string().required('ValidationSchema.firstNameRequired'),
  })
  .required();
const SignUp = () => {
  const styles = useStyle();
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),

    mode: 'all',

    defaultValues: {email: '', password: '', confirmPassword: '', name: ''},
  });
  const {t} = useTranslation();
  const onSubmit = data => {
    // console.log(data);
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="User Name"
            placeholder="Enter your name"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            onBlur={onBlur}
            inputRef={ref}
            onChangeText={value => onChange(value.trim())}
            onSubmitEditing={() => setFocus('email')}
          />
        )}
        name="name"
      />
      {errors?.name && (
        <Text style={styles.errorText}>{t(errors?.name?.message)}</Text>
      )}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, value, onBlur, ref}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="Email"
            placeholder="Enter email"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            onBlur={onBlur}
            inputRef={ref}
            onChangeText={value => onChange(value.trim())}
            onSubmitEditing={() => setFocus('password')}
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
        render={({field: {onChange, onBlur, value, ref}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="Password"
            placeholder="Enter password"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            onBlur={onBlur}
            inputRef={ref}
            onChangeText={value => onChange(value.trim())}
            password={true}
            onSubmitEditing={() => setFocus('confirmPassword')}
          />
        )}
        name="password"
      />
      {errors?.password && (
        <Text style={styles.errorText}>{t(errors?.password?.message)}</Text>
      )}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <CustomTextInput
            containerStyle={{marginTop: s(20)}}
            heading="Confirm Password"
            placeholder="Enter password"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.placeholder}
            value={value}
            inputRef={ref}
            onBlur={onBlur}
            onChangeText={value => onChange(value.trim())}
            password={true}
          />
        )}
        name="confirmPassword"
      />
      {errors?.confirmPassword && (
        <Text style={styles.errorText}>
          {t(errors?.confirmPassword?.message)}
        </Text>
      )}
      <CustomButton
        containerStyle={{marginTop: s(16)}}
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
export default SignUp;
