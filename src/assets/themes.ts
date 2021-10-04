import { Theme } from 'react-native-paper/lib/typescript/types';
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  dark: false,
  // mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007aff', //primary color for your app, usually your brand color.
    accent: '#00faff', //secondary color for your app which complements the primary color.
    background: '#f0f0f0', //background color for pages, such as lists.
    surface: '#fafafa', //background color for elements containing content, such as cards.
    text: '#212121', //text color for content.
    disabled: '#cccccc', //color for disabled elements.
    placeholder: '#aaaaaa', //color for placeholder text, such as input placeholder.
    // backdrop: '', //color for backdrops of various components such as modals.
    // onSurface: '', //background color for snackbars
    // notification: '', //background color for badges
    // error: '',
  },
  fonts: {
    // https://callstack.github.io/react-native-paper/fonts.html
    ...DefaultTheme.fonts,
    // regular: { fontFamily: '' },
    // medium: { fontFamily: '' },
    // light: { fontFamily: '' },
    // thin: { fontFamily: '' },
  },
  animation: { scale: 1 },
};

export const darkTheme: Theme = {
  ...DarkTheme,
  dark: true,
  // mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
  roundness: 5,
  colors: {
    ...DarkTheme.colors,
    // primary: '#007aff', //primary color for your app, usually your brand color.
    // accent: '#00faff', //secondary color for your app which complements the primary color.
    // background: '#f0f0f0', //background color for pages, such as lists.
    // surface: '#fafafa', //background color for elements containing content, such as cards.
    // text: '#212121', //text color for content.
    // disabled: '#cccccc', //color for disabled elements.
    // placeholder: '#aaaaaa', //color for placeholder text, such as input placeholder.
    // backdrop: '', //color for backdrops of various components such as modals.
    // onSurface: '', //background color for snackbars
    // notification: '', //background color for badges
    // error: '',
  },
  fonts: {
    // https://callstack.github.io/react-native-paper/fonts.html
    ...DarkTheme.fonts,
    // regular: { fontFamily: '' },
    // medium: { fontFamily: '' },
    // light: { fontFamily: '' },
    // thin: { fontFamily: '' },
  },
  animation: { scale: 1 },
};
