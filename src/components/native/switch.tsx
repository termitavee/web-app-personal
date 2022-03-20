import React from 'react';
import { StyleSheet, ViewStyle, Switch as SwitchNative, SwitchProps, StyleProp } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
  },
});

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

const Switch = ({ style, ...props }: IButtonProps) => <SwitchNative style={[styles.button, style]} {...props} />;
export default Switch;
