import React, { useMemo } from 'react';
import { StyleSheet, ViewStyle, Pressable, PressableProps, StyleProp, TextStyle } from 'react-native';

import { useTheme } from 'src/assets/themes';

import Text from './text';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  text: {},
  outlined: {
    borderRadius: 5,
    borderWidth: 1,
  },
  contained: {},
});

interface IButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  mode?: 'text' | 'outlined' | 'contained';
  color?: string;
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

const Button = ({ style, children, mode = 'contained', ...props }: IButtonProps) => {
  const { colors } = useTheme();

  const stylesMode = useMemo<StyleProp<ViewStyle>>(() => {
    const containedExtraStyle: StyleProp<ViewStyle> = mode === 'contained' ? { backgroundColor: colors.primary } : {};
    return {
      ...containedExtraStyle,
      ...styles[mode],
    };
  }, [mode, colors.primary]);

  return (
    <Pressable style={[styles.button, stylesMode, { borderColor: colors.primary }, style]} {...props}>
      <Text>{children}</Text>
    </Pressable>
  );
};
export default Button;
