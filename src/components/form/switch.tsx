import React from 'react';

import SwitchNative from '../native/switch';
import Text from '../native/text';
import View from '../native/view';

interface SwitchFormType {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const SwitchForm: React.FC<SwitchFormType> = ({ title, value, onChange }) => (
  <View flexDirection="row" justifyContent="space-between" alignItems="center">
    <Text>{title}</Text>
    <SwitchNative value={value} onValueChange={onChange} />
  </View>
);

export default SwitchForm;
