import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: '100%',
    margin: 10,
  },
});

interface IButtonProps {
  children: React.ReactNode;
  labelStyle: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
  mode: 'text' | 'outlined' | 'contained';
  onPress: () => void;
}

const Button = ({ style, children, ...props }: IButtonProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperButton style={[styles.card, style]} {...props}>
      {children}
    </PaperButton>
  );
};

export default Button;
