import React from 'react';
import { TextProps } from 'react-native';
import { Text as PaperText } from 'react-native-paper';

interface ICardProps extends TextProps {
  children: string | JSX.Element | (string | JSX.Element)[];
}

const Text = ({ style, children, ...props }: ICardProps) => (
  <PaperText style={style} {...props}>
    {children}
  </PaperText>
);
export default Text;
