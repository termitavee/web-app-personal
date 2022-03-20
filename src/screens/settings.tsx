import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { View, StyleSheet } from 'react-native';

import { useTheme } from 'src/assets/themes';
import Card from 'src/components/card';
import Container from 'src/components/container';
import SwitchForm from 'src/components/form/switch';
import Button from 'src/components/native/button';
import Text from 'src/components/native/text';
import { useDefaultContext } from 'src/hooks/use-context';
import { SettingsScreenPropType } from 'src/types/navigation';
import { DeviceUtils } from 'src/utils/device';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: { flex: 1 },
  buttonText: {},
});

const Settings: React.FC<SettingsScreenPropType> = () => {
  const { themeContext, set } = useDefaultContext();
  const { colors } = useTheme();
  const { t, i18n } = useTranslation('translation');

  const toogleLang = (lang: string) => {
    if (i18n.language !== lang) void i18n.changeLanguage(lang);
  };

  const onPressWeb = () => {
    void DeviceUtils.openUrl('https://jrdominguez.dev');
  };

  const onPressApp = () => {
    void DeviceUtils.openUrl(
      `https://firebasestorage.googleapis.com/v0/b/termitavee-personal.appspot.com/o/jrdominguez.apk?alt=media`,
    );
  };
  const onPressExpo = () => {
    void DeviceUtils.openUrl('https://expo.dev/@termitavee/jrdominguez');
  };

  const onPressSource = () => {
    void DeviceUtils.openUrl('https://github.com/termitavee/web-app-personal');
  };

  return (
    <Container noHeader>
      <Text variant="title">{t('settings.description')}</Text>
      <Card>
        <Text variant="headline">{t('settings.language')}</Text>
        <View style={styles.row}>
          {/* outlined */}
          <Button
            onPress={() => toogleLang('es')}
            disabled={i18n.language === 'es'}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            {`🇪🇸 ${t('settings.spanish')}`}
          </Button>
          <Button
            onPress={() => toogleLang('en')}
            disabled={i18n.language === 'en'}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            {`🇬🇧 ${t('settings.english')}`}
          </Button>
        </View>
      </Card>
      <Card>
        <Text variant="headline">{t('settings.customization')}</Text>
        <SwitchForm
          title={t('settings.darkTheme')}
          value={themeContext === 'dark'}
          onChange={isDark => set.theme(isDark ? 'dark' : 'light')}
        />
      </Card>
      <Card>
        <Text variant="headline">{t('settings.interestLinks')}</Text>
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
