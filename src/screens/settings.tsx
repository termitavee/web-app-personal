import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';

import Button from 'src/components/button';
import Card from 'src/components/card';
import Container from 'src/components/container';
import Headline from 'src/components/text/headline';
import Text from 'src/components/text/text';
import Title from 'src/components/text/title';
import { useDefaultContext } from 'src/hooks/use-context';
import { DeviceUtils } from 'src/utils/device';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: { flex: 1 },
  buttonText: {},
});

const Settings = () => {
  const { themeContext, set } = useDefaultContext();
  const { colors } = useTheme();
  const { t, i18n } = useTranslation('translation');

  const toogleLang = lang => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  };

  const onPressWeb = () => DeviceUtils.openUrl('https://jrdominguez.dev');

  const onPressApp = () =>
    DeviceUtils.openUrl(
      `https://firebasestorage.googleapis.com/v0/b/termitavee-personal.appspot.com/o/jrdominguez.apk?alt=media`,
    );

  const onPressExpo = () => DeviceUtils.openUrl('https://expo.dev/@termitavee/jrdominguez');

  const onPressSource = () => DeviceUtils.openUrl('https://github.com/termitavee/web-app-personal');

  return (
    <Container>
      <Title>{t('settings.description')}</Title>
      <Card>
        <Headline>{t('settings.language')}</Headline>
        <View style={styles.row}>
          {/* outlined */}
          <Button
            onPress={() => toogleLang('es')}
            mode={i18n.language === 'es' ? 'contained' : 'outlined'}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            🇪🇸 {t('settings.spanish')}
          </Button>
          <Button
            onPress={() => toogleLang('en')}
            mode={i18n.language === 'en' ? 'contained' : 'outlined'}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            🇬🇧 {t('settings.english')}
          </Button>
        </View>
      </Card>
      <Card>
        <Headline>{t('settings.darkTheme')}</Headline>
        <Switch value={themeContext === 'dark'} onValueChange={isDark => set.theme(isDark ? 'dark' : 'light')} />
      </Card>
      <Card>
        <Headline>{t('settings.interestLinks')}</Headline>
        {!DeviceUtils.isWeb && (
          <Text>
            <Trans i18nKey="settings.linkToWeb">
              Link to the
              <Text style={{ color: colors.primary }} onPress={onPressWeb}>
                {' '}
                Web version
              </Text>
            </Trans>
          </Text>
        )}
        {!DeviceUtils.isMobile && (
          <Text>
            <Trans i18nKey="settings.linkToApp">
              Link to the
              <Text style={{ color: colors.primary }} onPress={onPressApp}>
                {' '}
                App
              </Text>
            </Trans>
          </Text>
        )}
        <Text>
          <Trans i18nKey="settings.linkToExpo">
            Link to the
            <Text style={{ color: colors.primary }} onPress={onPressExpo}>
              {' '}
              Expo App
            </Text>
          </Trans>
        </Text>
        <Text>
          <Trans i18nKey="settings.linkToSource">
            Link to the
            <Text style={{ color: colors.primary }} onPress={onPressSource}>
              {' '}
              Source code
            </Text>
          </Trans>
        </Text>
      </Card>
    </Container>
  );
};

export default Settings;
