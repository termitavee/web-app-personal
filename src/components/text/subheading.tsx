import React from 'react';
import { TextProps } from 'react-native';
import { Subheading as PaperSubheading } from 'react-native-paper';

interface ICardProps extends TextProps {
  children: string;
}

const Subheading = ({ style, children, ...props }: ICardProps) => (
  <PaperSubheading style={style} {...props}>
    {children}
  </PaperSubheading>
);
export default Subheading;
