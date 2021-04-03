import React from 'react';
import SurveyCard from '@components/SurveyCard';

export default {
  title: 'SurveyCard',
  component: SurveyCard,
};

const Template = (args) => <SurveyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '제목',
};
