import { DefaultTheme, DarkTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

export const lightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  animation: { scale: 1 },
  colors: {
    primary: '#0074ff',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#ffffff',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    error: '#B00020',
    notification: '#f50057',
    onSurface: '#000000',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    text: '#000000',
  },
  dark: false,
  fonts: {
    light: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '300' },
    medium: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '500' },
    regular: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400' },
    thin: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '100' },
  },
  roundness: 5,
};

export const darkTheme: Theme = {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  roundness: 5,
  animation: { scale: 1 },
  colors: {
    primary: '#3390ff',
    accent: '#03dac6',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    background: '#121212',
    surface: '#121212',
    disabled: 'rgba(255, 255, 255, 0.38)',
    error: '#CF6679',
    notification: '#ff80ab',
    onSurface: '#FFFFFF',
    placeholder: 'rgba(255, 255, 255, 0.54)',
    text: '#ffffff',
  },
  fonts: {
    light: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '300' },
    medium: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '500' },
    regular: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400' },
    thin: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '100' },
  },
};
