import React from 'react';
import SurveyRadioButton from '../components/SurveyRadioButton';

export default {
  title: 'SurveyRadioButton',
  component: SurveyRadioButton,
};

const Template = (args) => <SurveyRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};
