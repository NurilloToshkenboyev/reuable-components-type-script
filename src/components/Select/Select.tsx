import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  selectClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  selectClassName = '',
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectClassName}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
