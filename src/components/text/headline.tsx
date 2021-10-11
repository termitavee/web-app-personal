import React from 'react';
import { TextProps } from 'react-native';
import { Headline as PaperHeadline } from 'react-native-paper';

interface ICardProps extends TextProps {
  children: string;
}

const Headline = ({ style, children, ...props }: ICardProps) => (
  <PaperHeadline style={style} {...props}>
    {children}
  </PaperHeadline>
);
export default Headline;
