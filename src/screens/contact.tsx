import React from 'react';
import Container from 'src/components/container';
import Text from 'src/components/text/text';

const Contact = () => {
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>contacto de email y RR.SS.</Text>
      {/* TODO add icons */}
      <Text>LinkedIn</Text>
      <Text>github</Text>
      <Text>email</Text>
    </Container>
  );
};

export default Contact;
