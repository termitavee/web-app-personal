import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';
const isMacos = Platform.OS === 'macos';
const isWindows = Platform.OS === 'windows';

const isMobile = isAndroid || isIos;

export const DeviceUtils = {
  isWeb,
  isAndroid,
  isIos,
  isMacos,
  isWindows,
  isMobile,
};
