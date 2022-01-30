import { SelectWrapper } from './Select.styles';
import { SelectHTMLAttributes } from 'react';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  onChange: any;
}

export function Select({ options, onChange, ...props }: SelectProps) {
  return (
    <SelectWrapper
      {...props}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} label={option.label} />
      ))}
    </SelectWrapper>
  );
}
