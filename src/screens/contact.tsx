import React from 'react';
import FontAwesome5icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from 'src/components/container';
import Text from 'src/components/text/text';
import Button from 'src/components/button';
import { useTranslation } from 'react-i18next';
import { DeviceUtils } from 'src/utils/device';
import Title from 'src/components/text/title';

const urlLinkedin = 'linkedin.com/in/jose-dominguez-rincon';
const urlGithub = 'github.com/termitavee';
const urlMail = ':jose.ro.dominguez@gmail.com';

const Contact = () => {
  const { t } = useTranslation();

  const onPressLinkedin = () => DeviceUtils.openUrl(`https://${urlLinkedin}`);
  const onPressGithub = () => DeviceUtils.openUrl(`https://${urlGithub}`);
  const onPressEmail = () => DeviceUtils.openUrl(`mailto:${urlMail}`);
  const addToClipboard = (text: string) => DeviceUtils.addToClipboard(text);

  return (
    <Container>
      <Title>{t('contact.description')}</Title>
      <Button mode="outlined" onPress={onPressLinkedin}>
        <FontAwesome5icons name="linkedin" size={26} /> Linkedin
      </Button>
      <Text onPress={() => addToClipboard(urlLinkedin)}>{t('addToClipboard')}</Text>

      <Button mode="outlined" onPress={onPressGithub}>
        <FontAwesome5icons name="github" size={26} /> Github
      </Button>
      <Text onPress={() => addToClipboard(urlGithub)}>{t('addToClipboard')}</Text>

      <Button mode="outlined" onPress={onPressEmail}>
        <Ionicons name="mail" size={26} /> Email
      </Button>
      <Text onPress={() => addToClipboard(urlMail)}>{t('addToClipboard')}</Text>
    </Container>
  );
};

export default Contact;
