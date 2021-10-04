import { Platform, Linking } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';
const isMacos = Platform.OS === 'macos';
const isWindows = Platform.OS === 'windows';

const isMobile = isAndroid || isIos;

const canOpenURL = (url: string) => Linking.canOpenURL(url);

const openUrl = (url: string) => canOpenURL(url).then(() => Linking.openURL(url));
const addToClipboard = (text: string) => Clipboard.setString(text);

export const DeviceUtils = {
  isWeb,
  isAndroid,
  isIos,
  isMacos,
  isWindows,
  isMobile,
  canOpenURL,
  openUrl,
  addToClipboard,
};
