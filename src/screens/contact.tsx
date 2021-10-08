import React from 'react';
import FontAwesome5icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useToast } from 'react-native-toast-notifications';

import Container from 'src/components/container';
import Text from 'src/components/text/text';
import Button from 'src/components/button';
import { useTranslation } from 'react-i18next';
import { DeviceUtils } from 'src/utils/device';
import Title from 'src/components/text/title';

const urlLinkedin = 'linkedin.com/in/jose-dominguez-rincon';
const urlGithub = 'github.com/termitavee';
const urlMail = 'jose.ro.dominguez@gmail.com';

const toastConfig = {
  type: 'normal',
  placement: 'bottom',
  duration: 3000,
  animationType: 'slide-in',
};

const Contact = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const openUrlOrCopy = async (text: string, alt?: string) => {
    const canOpen = await DeviceUtils.canOpenURL(text);
    if (canOpen) await DeviceUtils.openUrl(text);
    else addToClipboard(alt || text);
  };

  const onPressLinkedin = () => openUrlOrCopy(`https://${urlLinkedin}`, urlLinkedin);
  const onPressGithub = () => openUrlOrCopy(`https://${urlGithub}`, urlGithub);
  const onPressEmail = () => openUrlOrCopy(`mailto:${urlMail}`, urlMail);
  const addToClipboard = (text: string) => {
    DeviceUtils.addToClipboard(text).then(() => toast.show(t('addedToClipboard', toastConfig)));
  };
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
