import { DefaultTheme, DarkTheme as DefaultDarkTheme } from '@react-navigation/native';
import { Breakpoint, createTheme, useTheme as useThemeDef } from '@shopify/restyle';
import { StyleProp, TextStyle } from 'react-native';

const textVariants: Record<string, StyleProp<TextStyle>> = {
  default: {
    color: 'text',
    textAlign: 'left',
  },
  caption: {
    color: 'text',
    fontSize: 12,
    lineHeight: 20,
    marginVertical: 'textMarginVertical',
    letterSpacing: 0.4,
  },
  headline: {
    color: 'text',
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 'textMarginVertical',
    letterSpacing: 0,
  },
  paragraph: {
    color: 'text',
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 'textMarginVertical',
    letterSpacing: 0.25,
  },
  subheading: {
    color: 'text',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 'textMarginVertical',
    letterSpacing: 0.5,
  },
  text: {
    color: 'text',
    textAlign: 'left',
  },
  title: {
    color: 'text',
    fontSize: 20,
    lineHeight: 30,
    marginVertical: 'textMarginVertical',
    letterSpacing: 0.15,
  },
};

const spacing: Record<string, string | number> = {
  textMarginVertical: 2,
};

export const minTabletWidth = 640;

const breakpoints: Record<string, Breakpoint> = {
  phone: 0,
  tablet: {
    width: 768,
    height: minTabletWidth,
  },
  largeTablet: {
    width: 1024,
    height: 1024,
  },
};

// const theme = createTheme({
//   colors: {
//     mainBackground: palette.white,
//     cardPrimaryBackground: palette.purplePrimary,
//   },
//   spacing: {
//     s: 8,
//     m: 16,
//     tablet: 768,
//     l: 24,
//     xl: 40,
//   },
//   breakpoints: {
//     phone: 0,
//   },
// });

export const lightTheme = createTheme({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    disabled: '#9e9e9e',
  },
  spacing,
  breakpoints,
  textVariants,
  // size: {
  //   cell: {
  //     minHeight: 40,
  //   },
  // },

  // ...DefaultTheme,
  // animation: { scale: 1 },
  // colors: {
  //   primary: '#0074ff',
  //   accent: '#03dac4',
  //   background: '#f6f6f6',
  //   surface: '#ffffff',
  //   backdrop: 'rgba(0, 0, 0, 0.5)',
  //   disabled: 'rgba(0, 0, 0, 0.26)',
  //   error: '#B00020',
  //   notification: '#f50057',
  //   onSurface: '#000000',
  //   placeholder: 'rgba(0, 0, 0, 0.54)',
  //   text: '#000000',
  // },
  // dark: false,
  // fonts: {
  //   light: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '300' },
  //   medium: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '500' },
  //   regular: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400' },
  //   thin: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '100' },
  // },
  // roundness: 5,
});

export type Theme = typeof lightTheme;
export type Colors = typeof lightTheme.colors;
export type Spacing = typeof lightTheme.spacing;
export type Breakpoints = typeof lightTheme.breakpoints;
export type TextVariants = typeof lightTheme.textVariants;

export const darkTheme: Theme = {
  ...lightTheme,
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    disabled: '#9e9e9e',
  },

  // ...DarkTheme,
  // dark: true,
  // mode: 'adaptive',
  // roundness: 5,
  // animation: { scale: 1 },
  // colors: {
  //   primary: '#3390ff',
  //   accent: '#03dac6',
  //   backdrop: 'rgba(0, 0, 0, 0.5)',
  //   background: '#121212',
  //   surface: '#121212',
  //   disabled: 'rgba(255, 255, 255, 0.38)',
  //   error: '#CF6679',
  //   notification: '#ff80ab',
  //   onSurface: '#FFFFFF',
  //   placeholder: 'rgba(255, 255, 255, 0.54)',
  //   text: '#ffffff',
  // },
  // fonts: {
  //   light: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '300' },
  //   medium: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '500' },
  //   regular: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400' },
  //   thin: { fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '100' },
  // },
};

export const useTheme = <T = Theme>(): T => useThemeDef<T>();
