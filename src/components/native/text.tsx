import { createText, TextProps as NativeTextProps } from '@shopify/restyle';
import React from 'react';
import { StyleProp, TextStyle, TextProps as RNTextProps } from 'react-native';

import { Theme } from 'src/utils/themes';

const NativeText = createText<Theme>();

export interface TextProps extends RNTextProps, NativeTextProps<Theme> {
  // children?: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

const Text: React.FC<TextProps> = React.memo(({ variant = 'default' as const, ...props }) => (
  <NativeText variant={variant} {...props} />
));

export default Text;
