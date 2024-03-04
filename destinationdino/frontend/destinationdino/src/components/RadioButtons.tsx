import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChangeEvent } from 'react';

export interface RadioButtonsProps {
  labelName: string;
  labId: string;
  label1: string;
  label2: string;
  groupName: string;
  three: boolean;
}

const AdminRadioButtons: React.FC<RadioButtonsProps> = ({ labelName, labId, label1, label2, groupName, three }) => {
  
  function handleChange(event: ChangeEvent<HTMLInputElement>, value: string): void {
    console.log(value);
    
  }
  if (three) {
    return (
      <FormControl>
        <FormLabel id={labId}>{labelName}</FormLabel>
            <RadioGroup
              defaultValue={true}
              name={groupName}
              id="#radioButton"
              // onChange={handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label={label1} />
              <FormControlLabel value={false} control={<Radio />} label={label2} />
              <FormControlLabel value={"undefined"} control={<Radio />} label={"Do not apply"} />
            </RadioGroup>
      </FormControl>
      );
  } else {
    return (
      <FormControl>
        <FormLabel id={labId}>{labelName}</FormLabel>
            <RadioGroup
              defaultValue={true}
              name={groupName}
              id={groupName}
              onChange={handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label={label1} />
              <FormControlLabel value={false} control={<Radio />} label={label2} />
            </RadioGroup>
      </FormControl>
    );
  }
}

export default AdminRadioButtons;