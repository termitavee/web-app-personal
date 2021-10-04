import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import Container from 'src/components/container';
import Subheading from 'src/components/text/subheading';
import Text from 'src/components/text/text';
import Title from 'src/components/text/title';

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigateToTab = (screen: 'Experience' | 'Contact' | 'Settings') => {
    navigation.navigate(screen);
  };
  return (
    <Container>
      <Title>{t('home.title')}</Title>
      <Subheading>{t('home.description')}</Subheading>
      <Text>
        <Trans i18nKey="home.goToExp">
          go to tab
          <Text style={{ color: colors.primary }} onPress={() => navigateToTab('Experience')}>
            experience
          </Text>
        </Trans>
      </Text>
      <Text>
        <Trans i18nKey="home.goToContact">
          go to tab
          <Text style={{ color: colors.primary }} onPress={() => navigateToTab('Contact')}>
            contact
          </Text>
        </Trans>
      </Text>
      <Text>
        <Trans i18nKey="home.goToSetings">
          go to tab
          <Text style={{ color: colors.primary }} onPress={() => navigateToTab('Settings')}>
            settings
          </Text>
        </Trans>
      </Text>
    </Container>
  );
};

export default Home;
