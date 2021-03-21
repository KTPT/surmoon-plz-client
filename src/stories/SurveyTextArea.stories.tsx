import React from 'react';
import SurveyTextArea from '../components/SurveyTextArea';

export default {
  title: 'SurveyTextArea',
  component: SurveyTextArea,
};

const Template = (args) => <SurveyTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {};
