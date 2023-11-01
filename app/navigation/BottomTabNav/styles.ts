import {Platform, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, ms} from 'react-native-size-matters';

export const useStyle = () => {
  const theme = useTheme();

  const styles = () =>
    StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.background,
        elevation: 10,
        paddingBottom: Platform.OS == 'ios' ? ms(15) : 0,
        paddingHorizontal: ms(21),
        shadowColor: '#000',
        shadowOffset: {width: 1, height: -2},
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      subcontainer: {
        alignItems: 'center',
        padding: s(3),
      },
      defaultTitle: {
        fontSize: ms(14),
        textAlign: 'center',
      },
      focusedTitle: {
        fontSize: ms(14),
        color: theme.colors.focused,
        textAlign: 'center',
      },
      iconStyle: {
        height: s(24),
        width: s(24),
      },
    });
  return styles();
};
