import React from 'react';
import { Text, View } from 'react-native';

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>idioma</Text>
      <Text>tema oscuro</Text>
      <Text>enlace a expo/web (en función de donde se vea)</Text>
    </View>
  );
};

export default Settings;
