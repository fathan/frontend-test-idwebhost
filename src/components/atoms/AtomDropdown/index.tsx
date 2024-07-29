import React, { useState, useEffect } from 'react';

interface IOption {
  label?: string;
  value?: string;
}

interface IDropdownInputProps {
  options: IOption[];
  placeholder?: string;
  onChange?: (value: string | undefined) => void;
  disabled?: boolean;
  value?: string | number | undefined;
}

const AtomDropdown: React.FC<IDropdownInputProps> = ({ 
  options, 
  placeholder = 'Select an option', 
  onChange,
  disabled = false,
  value
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  useEffect(() => {
    const foundOption = options.find(option => option.value === value);
    setSelectedOption(foundOption || null);
  }, [value, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: IOption) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={selectedOption ? selectedOption.label : ''}
        onClick={toggleDropdown}
        placeholder={placeholder}
        readOnly
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${disabled ? 'bg-gray-200' : 'cursor-pointer'}`}
      />
      <div
        className={`absolute inset-y-0 right-0 flex items-center pr-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={toggleDropdown}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => selectOption(option)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-3 py-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AtomDropdown;
