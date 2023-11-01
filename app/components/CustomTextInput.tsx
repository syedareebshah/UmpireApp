import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, vs, ms} from 'react-native-size-matters';
// import Feather from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends TextInputProps {
  containerStyle?: any;
  heading?: string;
  inputRef?: any;
  password?: boolean;
  leftIcon?: any;
  editMode?: boolean;
  editable?: boolean;
  iconStyle?: any;
  subContainerStyle?: any;
  isError?: boolean;
}
export const CustomTextInput = (props: Props) => {
  const styles = useStyle();
  const [onFocused, setOnFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const theme = useTheme();
  const {
    containerStyle,
    heading,
    inputRef,
    password,
    leftIcon,
    editMode,
    editable,
    iconStyle,
    subContainerStyle,
    isError,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {heading && <Text style={styles.headingStyle}>{heading}</Text>}
      <View
        style={[
          styles.subcontainer,
          isError && {borderColor: theme.colors.error},
          subContainerStyle,
        ]}>
        {leftIcon && (
          <View style={[styles.iconStyle, iconStyle]}>{leftIcon()}</View>
        )}
        <TextInput
          {...props}
          style={[
            styles.textInput,
            {width: password ? (leftIcon ? '78%' : '81%') : '86%'},
            editable != undefined &&
              !editable && {color: theme.colors.placeholder},
          ]}
          // editable={true}
          ref={inputRef}
          onFocus={() => {
            setOnFocused(true);
          }}
          onEndEditing={() => {
            setOnFocused(false);
          }}
          secureTextEntry={password ? !showPassword : false}
        />
        {password && (
          <TouchableOpacity
            style={styles.showPasswordStyle}
            onPress={() => {
              setShowPassword(prev => !prev);
            }}>
            <Feather name={showPassword ? 'eye' : 'eye-off'} size={s(16)} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const useStyle = () => {
  const theme = useTheme();

  const styles = () =>
    StyleSheet.create({
      container: {width: '100%'},
      subcontainer: {
        flexDirection: 'row',
        height: vs(36),
        borderColor: theme.colors?.heading,
        borderWidth: s(0.5),
        alignItems: 'center',
        borderRadius: s(2),
      },
      headingStyle: {
        fontSize: s(15),
        marginBottom: s(2),
      },
      textInput: {
        fontSize: s(14),
        marginStart: ms(20),
      },
      showPasswordStyle: {
        marginStart: ms(4),
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: ms(1),
      },
      iconStyle: {
        height: vs(20),
        width: vs(20),
      },
    });
  return styles();
};
