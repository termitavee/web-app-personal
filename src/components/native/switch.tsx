import React from 'react';
import { ViewStyle, Switch as SwitchNative, SwitchProps, StyleProp } from 'react-native';

import DeviceUtils from 'src/utils/device';
import { useTheme } from 'src/utils/themes';

interface IButtonProps extends SwitchProps {
  style?: StyleProp<ViewStyle>;
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
