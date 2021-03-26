import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';

interface Props {
  value: string;
}

export default function SurveyRadioButton({ value }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  const onClick = (): void => setChecked(!checked);

  return <Radio value={value} checked={checked} onClick={onClick} />;
}
