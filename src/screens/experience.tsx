import React from 'react';
import { useTranslation } from 'react-i18next';
import { List } from 'react-native-paper';
import Card from 'src/components/card';
import Container from 'src/components/container';
import Caption from 'src/components/text/caption';
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
      <Title>{t('experience.description')}</Title>
      <Subheading>{t('experience.knowledge.title')}</Subheading>
      <>
        {knowledgeList.map(job => (
          <Card key={job.title}>
            <Subheading>{job.title}</Subheading>
            <Caption>{job.subTitle}</Caption>
            <Paragraph>{job.description}</Paragraph>
          </Card>
        ))}
      </>
      <Subheading>{t('experience.workExperience.title')}</Subheading>
      <>
        {workList.map(job => (
          <Card key={job.title}>
            <Subheading>{job.title}</Subheading>
            <Caption>{job.subTitle}</Caption>
            <Paragraph>{job.description}</Paragraph>
          </Card>
        ))}
      </>
      <Subheading>{t('experience.education.title')}</Subheading>
      <>
        {educationList.map(job => (
          <Card key={job.title}>
            <Subheading>{job.title}</Subheading>
            <Caption>{job.subTitle}</Caption>
            <Paragraph>{job.description}</Paragraph>
          </Card>
        ))}
      </>
    </Container>
  );
};

export default Experience;
