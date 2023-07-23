import React, { ChangeEvent } from 'react';

interface SelectProps {
  value: string;
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

// eslint-disable-next-line max-len
const SelectInterface: React.FC<SelectProps> = ({ value, label, placeholder, onChange, children }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange}>
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
    </div>
  );
};

export default SelectInterface;