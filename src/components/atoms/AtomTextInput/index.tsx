import React from 'react';

interface ITextInputProps {
  type: 'text' | 'email' | 'number';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const AtomTextInput: React.FC<ITextInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 ${className}`}
    />
  );
};

export default AtomTextInput;
