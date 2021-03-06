import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '../src/components/TextArea';

storiesOf('TextArea', module)
  .add('default', () => <TextArea />)
  .add('with placeholder', () => <TextArea placeholder="여기에 입력하세요." />)
  .add('with fontsize 50px', () => <TextArea fontsize="50px" />)
  .add('with background', () => <TextArea background="#11111111" />);
