import React from 'react';
import { StyleSheet, ViewStyle, Pressable, PressableProps, StyleProp, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
  },
  text: {
    // TODO
  },
  outlined: {
    // TODO
  },
  contained: {
    // TODO
  },
});

interface IButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  mode?: 'text' | 'outlined' | 'contained';
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

const Button = ({ style, children, mode = 'contained', ...props }: IButtonProps) => (
  <Pressable style={[styles.button, styles[mode], style]} {...props}>
    {children}
  </Pressable>
);
export default Button;
