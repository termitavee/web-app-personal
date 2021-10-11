import React from 'react';
import { TextProps } from 'react-native';
import { Paragraph as PaperParagraph } from 'react-native-paper';

interface ICardProps extends TextProps {
  children: string;
}

const Paragraph = ({ style, children, ...props }: ICardProps) => (
  <PaperParagraph style={style} {...props}>
    {children}
  </PaperParagraph>
);
export default Paragraph;
