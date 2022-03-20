import React from 'react';
import { ViewStyle, Switch as SwitchNative, SwitchProps, StyleProp } from 'react-native';

import { useTheme } from 'src/assets/themes';
import DeviceUtils from 'src/utils/device';

interface IButtonProps extends SwitchProps {
  style?: StyleProp<ViewStyle>;

  // mode?: 'text' | 'outlined' | 'contained';
  // dark?: boolean;
  // compact?: boolean;
  // color?: string;
  // loading?: boolean;
  // icon?: IconSource;
  // disabled?: boolean;
  // children: React.ReactNode;
  // uppercase?: boolean;
  // accessibilityLabel?: string;
  // onPress?: () => void;
  // onLongPress?: () => void;
  // contentStyle?: StyleProp<ViewStyle>;
  // style?: StyleProp<ViewStyle>;
  // labelStyle?: StyleProp<TextStyle>;
  // theme?: Theme;
  // testID?: string;
}

const Switch = ({ style, ...props }: IButtonProps) => {
  const { colors } = useTheme();

  const trackColor = React.useMemo(() => (DeviceUtils.isIos ? { true: colors.primary } : undefined), [colors.primary]);
  const thumbColor = React.useMemo(
    () => (DeviceUtils.isAndroid ? (props.disabled ? colors.disabled : colors.primary) : undefined),
    [colors.primary, colors.disabled, props.disabled],
  );

  return <SwitchNative trackColor={trackColor} thumbColor={thumbColor} style={style} {...props} />;
};
export default Switch;
