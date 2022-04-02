import Clipboard from '@react-native-clipboard/clipboard';
import { Platform, Linking } from 'react-native';

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';
const isMacos = Platform.OS === 'macos';
const isWindows = Platform.OS === 'windows';

const isMobile = isAndroid || isIos;

const canOpenURL = (url: string) => Linking.canOpenURL(url);

const openUrl = (url: string) =>
  canOpenURL(url).then(() => (Platform.OS === 'web' ? window.open(url, '_blank') : Linking.openURL(url)));

// eslint-disable-next-line @typescript-eslint/require-await
const addToClipboard = async (text: string): Promise<void> => Clipboard.setString(text);

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

export default DeviceUtils;
