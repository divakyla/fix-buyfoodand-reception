import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

const RadioButton: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [result, setResult] = useState<JSX.Element | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setResult(getResult(event.target.value));
  };

  const getResult = (value: string): JSX.Element | null => {
    if (value === '冊子') {
      return (
        <div>
          {/* <img src="satsu.png" alt="" /> */}
        </div>
      );
    } else if (value === 'バラ') {
      return (
        <div >
         {/* <img src="bara.png" alt="bara" /> */}
        </div>
      );
    } 
    return null;
  };

  
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <FormControlLabel value="冊子" control={<Radio />} label="冊子" />
        <FormControlLabel value="バラ" control={<Radio />} label="バラ" />
      </RadioGroup>
      {result}
    </FormControl>
  );
};

export default RadioButton;
