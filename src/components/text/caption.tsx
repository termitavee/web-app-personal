import React from 'react';
import { TextProps } from 'react-native';
import { Caption as PaperCaption } from 'react-native-paper';

interface ICardProps extends TextProps {
  children: string;
}

const Caption = ({ style, children, ...props }: ICardProps) => (
  <PaperCaption style={style} {...props}>
    {children}
  </PaperCaption>
);
export default Caption;
