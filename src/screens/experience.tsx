/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from 'src/components/card';
import Container from 'src/components/container';
import Text from 'src/components/native/text';
import { ExpScreenPropType } from 'src/types/navigation';

type TranslatedType = {
  title: string;
  subTitle: string;
  description: string;
};

const Experience: React.FC<ExpScreenPropType> = () => {
  const { t } = useTranslation();
  const workList = t('experience.workExperience.fields') as TranslatedType[];
  const knowledgeList = t('experience.knowledge.fields') as TranslatedType[];
  const educationList = t('experience.education.fields') as TranslatedType[];
  return (
    <Container noHeader>
      <Text variant="title">{t('experience.description')}</Text>
      <Text variant="subheading">{t('experience.knowledge.title')}</Text>
      <>
        {knowledgeList.map(job => (
          <Card key={job.title}>
            <Text variant="subheading">{job.title}</Text>
            <Text variant="caption">{job.subTitle}</Text>
            <Text variant="paragraph">{job.description}</Text>
          </Card>
        ))}
      </>
      <Text variant="subheading">{t('experience.workExperience.title')}</Text>
      <>
        {workList.map(job => (
          <Card key={job.title}>
            <Text variant="subheading">{job.title}</Text>
            <Text variant="caption">{job.subTitle}</Text>
            <Text variant="paragraph">{job.description}</Text>
          </Card>
        ))}
      </>
      <Text variant="subheading">{t('experience.education.title')}</Text>
      <>
        {educationList.map(job => (
          <Card key={job.title}>
            <Text variant="subheading">{job.title}</Text>
            <Text variant="caption">{job.subTitle}</Text>
            <Text variant="paragraph">{job.description}</Text>
          </Card>
        ))}
      </>
    </Container>
  );
};

export default Experience;
