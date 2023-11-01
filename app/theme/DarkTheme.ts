import {MD2DarkTheme as PaperDarkTheme} from 'react-native-paper';
const DarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: 'black',
    accent: 'white',
    background: 'black',
    heading: 'white',
    focused: '#0000FF',
    placeholder: '#D3D3D3',
  },
};
export default DarkTheme;
