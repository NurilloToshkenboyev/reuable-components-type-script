import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
}) => {
  const baseStyle = 'rounded px-4 py-2 font-semibold focus:outline-none focus:ring-2';
  const variantStyle = variant === 'primary' 
    ? 'bg-blue-500 text-white hover:bg-green-500' 
    : 'bg-gray-500 text-white hover:bg-red-600'; 
  const sizeStyle =
    size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-md';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;

// import React from 'react';

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   type?: 'button' | 'submit' | 'reset';
//   variant?: 'primary' | 'secondary';
//   size?: 'small' | 'medium' | 'large';
//   disabled?: boolean;
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   onClick,
//   type = 'button',
//   variant = 'primary',
//   size = 'medium',
//   disabled = false,
// }) => {
//   const baseStyle = 'rounded px-4 py-2 font-semibold focus:outline-none focus:ring-2 transition-colors duration-300';
//   const variantStyle = variant === 'primary'
//     ? 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300' 
//     : 'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300'; 
//   const sizeStyle =
//     size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-md';
//   const disabledStyle = disabled ? 'cursor-not-allowed' : '';

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle}`}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
