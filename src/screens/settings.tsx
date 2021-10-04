import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import Button from 'src/components/button';

import Card from 'src/components/card';
import Container from 'src/components/container';
import Headline from 'src/components/text/headline';
import Subheading from 'src/components/text/subheading';
import Text from 'src/components/text/text';
import Title from 'src/components/text/title';
import { useDefaultContext } from 'src/hooks/use-context';
import { DeviceUtils } from 'src/utils/device';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    // width: '43%',
  },
  buttonText: {
    // fontSize: 10,
  },
});

const Settings = () => {
  const { themeContext, set } = useDefaultContext();
  const { colors } = useTheme();
  const { t, i18n } = useTranslation('translation');

  const selectSpanish = () => i18n.language === 'en' && i18n.changeLanguage('es');

  const selectEnglish = () => i18n.language === 'es' && i18n.changeLanguage('en');

  // TODO firebase url
  const onPressWeb = () => DeviceUtils.openUrl('https://expo.dev/accounts/termitavee/projects/portfolio');

  const onPressApp = () => DeviceUtils.openUrl('https://expo.dev/accounts/termitavee/projects/portfolio');
  return (
    <Container>
      <Title>{t('settings.title')}</Title>
      <Subheading>{t('settings.description')}</Subheading>
      <Card>
        <Headline>{t('settings.language')}</Headline>
        <View style={styles.row}>
          {/* outlined */}
          <Button
            onPress={selectSpanish}
            mode={i18n.language === 'es' ? 'contained' : 'outlined'}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            🇪🇸 {t('settings.spanish')}
          </Button>
          <Button
            onPress={selectEnglish}
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
      </Card>
    </Container>
  );
};

export default Settings;