import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
const DefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: 'black',
    accent: 'white',
    background: '#FFFFFF',
    heading: '#000000',
    focused: '#0000FF',
    placeholder: '#D3D3D3',
  },
};
export default DefaultTheme;
