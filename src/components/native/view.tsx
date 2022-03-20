import { createBox, BoxProps } from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle as ViewStyleNative } from 'react-native';

import { Theme } from 'src/assets/themes';

const Box = createBox<Theme>();

export type ViewStyle = StyleProp<ViewStyleNative>;

export interface ViewProps extends BoxProps<Theme> {
  children?: ReactNode;
  style?: ViewStyle;
  testID?: string;
}

const View: React.FC<ViewProps> = React.memo(props => <Box {...props} />);

export default View;
