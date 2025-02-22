import React, { ChangeEvent, MouseEvent, useState } from 'react';
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

  const onClick = ({ target }: MouseEvent<HTMLInputElement>): void => {
    const newValue = (target as HTMLInputElement).value;

    if (newValue === value) {
      setValue(null);
    }
  };

  return (
    <RadioGroup value={value} onChange={onChange} onClick={onClick}>
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
