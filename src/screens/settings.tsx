import React from 'react';
import { Switch } from 'react-native-paper';
import Card from 'src/components/card';
import Container from 'src/components/container';
import Text from 'src/components/text/text';
import { useDefaultContext } from 'src/hooks/use-context';
import { DeviceUtils } from 'src/utils/device';

const Settings = () => {
  const { themeContext, set } = useDefaultContext();

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Text>idioma</Text>
      </Card>
      <Card>
        <Text>tema oscuro</Text>
        <Switch value={themeContext === 'dark'} onValueChange={isDark => set.theme(isDark ? 'dark' : 'light')} />
      </Card>
      <Card>
        <Text>enlace a expo/web (en función de donde se vea)</Text>
        {!DeviceUtils.isWeb && <Text>enlace a web</Text>}
        {!DeviceUtils.isMobile && <Text>enlace a expo</Text>}
      </Card>
    </Container>
  );
};

export default Settings;
