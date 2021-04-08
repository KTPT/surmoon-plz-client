import React from 'react';
import SurveyCheckBox from '@components/SurveyCheckBox';

export default {
  title: 'SurveyCheckBox',
  component: SurveyCheckBox,
};

const Template = (args) => <SurveyCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  color: 'rgb(103, 58, 183)',
  disabled: false,
};
