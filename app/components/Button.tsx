'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  small,
  onClick,
  outline,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        relative
        rounded-lg
        transition
        hover:opacity-80
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'border-[1px]' : 'border-2'}
        ${small ? 'font-light' : 'font-semibold'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            top-3
            left-4
            absolute
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
