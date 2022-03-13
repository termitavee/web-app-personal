import React from 'react';
import { ViewProps } from 'react-native';

import View from './native/view';

const Separator: React.FC<ViewProps> = (props: ViewProps) => (
  <View height={1} width="100%" backgroundColor="disabled" {...props} />
);

export default Separator;
