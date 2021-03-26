import React, { ChangeEvent, useState } from 'react';
import { FormControlLabel, RadioGroup } from '@material-ui/core';
import SurveyRadioButton from './SurveyRadioButton';

interface Props {
  values: string[];
  color: string;
}

export default function SurveyRadioGroup({ values, color }: Props) {
  const [value, setValue] = useState<string | null>(null);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  };

  return (
    <RadioGroup value={value} onChange={onChange}>
      {values.map((value) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<SurveyRadioButton value={value} color={color} />}
          label={value}
        />
      ))}
    </RadioGroup>
  );
}
