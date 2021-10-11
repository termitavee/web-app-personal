import React from 'react';
import { TextProps } from 'react-native';
import { Title as PaperTitle } from 'react-native-paper';

interface ITitleProps extends TextProps {
  children: string;
}

const Title = ({ children, ...props }: ITitleProps) => <PaperTitle {...props}>{children}</PaperTitle>;
export default Title;
