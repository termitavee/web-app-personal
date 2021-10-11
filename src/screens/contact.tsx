import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import FontAwesome5icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from 'src/components/button';
import Container from 'src/components/container';
import Separator from 'src/components/separator';
import Title from 'src/components/text/title';
import { DeviceUtils } from 'src/utils/device';

const urlLinkedin = 'linkedin.com/in/jose-dominguez-rincon';
const urlGithub = 'github.com/termitavee';
const urlMail = 'jose.ro.dominguez@gmail.com';

const toastConfig = {
  type: 'normal',
  placement: 'bottom',
  duration: 3000,
  animationType: 'slide-in',
};

const styles = StyleSheet.create({
  separator: { marginVertical: 10 },
});

const Contact = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const addToClipboard = (text: string) => {
    DeviceUtils.addToClipboard(text).then(() => {
      toast.hideAll();
      toast.show(t('addedToClipboard', toastConfig));
    });
  };

  const openUrlOrCopy = async (text: string, alt?: string) => {
    const canOpen = await DeviceUtils.canOpenURL(text);
    if (canOpen) await DeviceUtils.openUrl(text);
    addToClipboard(alt || text);
  };

  const onPressLinkedin = () => openUrlOrCopy(`https://${urlLinkedin}`, urlLinkedin);
  const onPressGithub = () => openUrlOrCopy(`https://${urlGithub}`, urlGithub);
  const onPressEmail = () => {
    if (DeviceUtils.isMobile) openUrlOrCopy(`mailto:${urlMail}`, urlMail);
    else addToClipboard(urlMail);
  };

  return (
    <Container>
      <Title>{t('contact.description')}</Title>
      <Button mode="outlined" onPress={onPressLinkedin}>
        <FontAwesome5icons name="linkedin" size={26} /> Linkedin
      </Button>
      <Separator style={styles.separator} />

      <Button mode="outlined" onPress={onPressGithub}>
        <FontAwesome5icons name="github" size={26} /> Github
      </Button>
      <Separator style={styles.separator} />

      <Button mode="outlined" onPress={onPressEmail}>
        <Ionicons name="mail" size={26} /> {urlMail}
      </Button>
    </Container>
  );
};

export default Contact;
