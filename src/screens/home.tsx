import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Image, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import profileImage from 'src/assets/images/profile.jpg';
import Container from 'src/components/container';
import Separator from 'src/components/separator';
import Text from 'src/components/text/text';
import Title from 'src/components/text/title';

const styles = StyleSheet.create({
  imageCover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  separator: { marginVertical: 10 },
  content: { flex: 1 },
  footer: { paddingBottom: 10 },
});

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigateToTab = (screen: 'Experience' | 'Contact' | 'Settings') => {
    navigation.navigate(screen);
  };
  const mainColorStyle = { color: colors.primary };
  return (
    <Container>
      <View style={styles.imageCover}>
        <Image style={styles.Image} source={profileImage} />
        <Title style={mainColorStyle}>Jose Roberto Domínguez</Title>
      </View>
      <Separator style={styles.separator} />
      <Title style={mainColorStyle}>{t('home.description')}</Title>

      <Separator style={styles.separator} />
      <View style={styles.content} />

      <View style={styles.footer}>
        <Separator style={styles.separator} />
        <Text>
          <Trans i18nKey="home.goToExp">
            go to tab
            <Text style={mainColorStyle} onPress={() => navigateToTab('Experience')}>
              experience
            </Text>
          </Trans>
        </Text>
        <Text>
          <Trans i18nKey="home.goToContact">
            go to tab
            <Text style={mainColorStyle} onPress={() => navigateToTab('Contact')}>
              contact
            </Text>
          </Trans>
        </Text>
        <Text>
          <Trans i18nKey="home.goToSetings">
            go to tab
            <Text style={mainColorStyle} onPress={() => navigateToTab('Settings')}>
              settings
            </Text>
          </Trans>
        </Text>
      </View>
    </Container>
  );
};

export default Home;
