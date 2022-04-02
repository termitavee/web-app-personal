import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Image, View, StyleSheet } from 'react-native';

import profileImage from 'src/assets/images/profile.jpg';
import Container from 'src/components/container';
import Text from 'src/components/native/text';
import Separator from 'src/components/separator';
import { HomeScreenPropType } from 'src/types/navigation';
import DeviceUtils from 'src/utils/device';
import { useTheme } from 'src/utils/themes';

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

const Home: React.FC<HomeScreenPropType> = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigateToTab = (screen: 'Experience' | 'Contact' | 'Settings') => {
    navigation.navigate(screen);
  };
  const mainColorStyle = { color: colors.primary };
  return (
    <Container noHeader>
      <View style={styles.imageCover}>
        <Image style={styles.Image} source={profileImage} />
        <Text variant="title" style={mainColorStyle}>
          Jose Roberto Domínguez
        </Text>
      </View>
      <Separator style={styles.separator} />
      <Text variant="title" style={mainColorStyle}>
        {t('home.description')}
      </Text>

      <Separator style={styles.separator} />
      <View style={styles.content} />

      <View style={styles.footer}>
        {DeviceUtils.isIos && (
          <>
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
          </>
        )}
      </View>
    </Container>
  );
};

export default Home;
