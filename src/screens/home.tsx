import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';
import Container from 'src/components/container';
import Text from 'src/components/text/text';

const Home = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigateTo = () => {
    console.log('//TODO navigate');
  };
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('home.description')}</Text>
      <Text>
        <Trans i18nKey="home.goToExp">
          go to tab
          <Text style={{ color: colors.primary }} onPress={navigateTo}>
            experience
          </Text>
        </Trans>
      </Text>
      <Text>
        <Trans i18nKey="home.goToContact">
          go to tab
          <Text style={{ color: colors.primary }} onPress={navigateTo}>
            contact
          </Text>
        </Trans>
      </Text>
      <Text>
        <Trans i18nKey="home.goToSetings">
          go to tab
          <Text style={{ color: colors.primary }} onPress={navigateTo}>
            settings
          </Text>
        </Trans>
      </Text>
    </Container>
  );
};

export default Home;
