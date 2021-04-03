import React from 'react';
import SurveyTextArea from '@components/SurveyTextArea';

export default {
  title: 'SurveyTextArea',
  component: SurveyTextArea,
};

const Template = (args) => <SurveyTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '여기에 입력하세요.',
  defaultValue: '제목 없는 설문',
};
