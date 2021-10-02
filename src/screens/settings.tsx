import React from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { useDefaultContext } from 'src/hooks/use-context';

const Settings = () => {
  const { themeContext, set } = useDefaultContext();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>idioma</Text>
      <Text>tema oscuro</Text>
      <Switch value={themeContext === 'dark'} onValueChange={isDark => set.theme(isDark ? 'dark' : 'light')} />
      <Text>enlace a expo/web (en función de donde se vea)</Text>
    </View>
  );
};

export default Settings;
