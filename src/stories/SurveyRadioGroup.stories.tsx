import React from 'react';
import SurveyRadioGroup from '@components/SurveyRadioGroup';

export default {
  title: 'SurveyRadioGroup',
  component: SurveyRadioGroup,
};

const Template = (args) => <SurveyRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: ['a', 'b', 'c'],
  color: 'rgb(103, 58, 183)',
};
