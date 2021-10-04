import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'src/components/card';
import Container from 'src/components/container';
import Caption from 'src/components/text/caption';
import Headline from 'src/components/text/headline';
import Paragraph from 'src/components/text/paragraph';
import Subheading from 'src/components/text/subheading';
import Title from 'src/components/text/title';

type translatedType = {
  title: string;
  subTitle: string;
  description: string;
};

const Experience = () => {
  const { t } = useTranslation();
  const workList = t('experience.workExperience.fields') as translatedType[];
  const knowledgeList = t('experience.knowledge.fields') as translatedType[];
  const educationList = t('experience.education.fields') as translatedType[];
  return (
    <Container>
      <Title>{t('experience.title')}</Title>
      <Subheading>{t('experience.description')}</Subheading>

      <Headline>{t('experience.knowledge.title')}</Headline>
      {knowledgeList.map(job => (
        <Card key={job.title}>
          <Subheading>{job.title}</Subheading>
          <Caption>{job.subTitle}</Caption>
          <Paragraph>{job.description}</Paragraph>
        </Card>
      ))}

      <Headline>{t('experience.workExperience.title')}</Headline>
      {workList.map(job => (
        <Card key={job.title}>
          <Subheading>{job.title}</Subheading>
          <Caption>{job.subTitle}</Caption>
          <Paragraph>{job.description}</Paragraph>
        </Card>
      ))}

      <Headline>{t('experience.education.title')}</Headline>
      {educationList.map(job => (
        <Card key={job.title}>
          <Subheading>{job.title}</Subheading>
          <Caption>{job.subTitle}</Caption>
          <Paragraph>{job.description}</Paragraph>
        </Card>
      ))}
      {/* <Trans i18nKey="myKey"  values={{ what: 'world' }} components={{ italic: <i />, bold: <strong /> }}/> */}
    </Container>
  );
};

export default Experience;
