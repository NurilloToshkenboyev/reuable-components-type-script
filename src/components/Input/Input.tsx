// import React from 'react';

// interface InputProps {
//   label: string;
//   type?: 'text' | 'password' | 'email';
//   placeholder?: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   labelClassName?: string;
//   inputClassName?: string;
// }

// const Input: React.FC<InputProps> = ({
//   label,
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   labelClassName = '',
//   inputClassName = '',
// }) => {
//   return (
//     <div className="mb-4">
//       <label className={`block text-gren-700 text-sm font-bold mb-2 ${labelClassName}`}>{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={`border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
//       />
//     </div>
//   );
// };

// export default Input;

import React from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  labelClassName = '',
  inputClassName = '',
}) => {
  return (
    <div className="mb-4">
      <label className={`block text-gray-700 text-sm font-bold mb-2 ${labelClassName}`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
      />
    </div>
  );
};

export default Input;
