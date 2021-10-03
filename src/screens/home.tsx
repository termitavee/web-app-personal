import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'src/components/container';
import Text from 'src/components/text/text';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('home.description')}</Text>
      <Text>vista previa de mi</Text>
      <Text>vista previa de mi</Text>

      <Text>algo mas detallado</Text>
      <Text>Contactame</Text>
      <Text>Cambiar cosas de la app</Text>
    </Container>
  );
};

export default Home;
