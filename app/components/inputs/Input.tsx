'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  errors,
  register,
  disabled,
  required,
  formatPrice,
  type = 'text',
}) => {
  return (
    <div
      className="
        w-full
        relative
      "
    >
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        type={type}
        placeholder=" "
        disabled={disabled}
        {...register(id, { required })}
        className={`
          p-4
          peer
          w-full
          border-2
          font-light
          rounded-md
          transition
          outline-none
          focus:ring-0
          bg-transparent
          appearance-none
          focus:outline-none
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
      <label
        htmlFor={id}
        className={`
          z-10
          px-2
          top-2
          text-md
          absolute
          bg-white
          transform
          scale-75
          origin-[0]
          duration-150
          -translate-y-4
          peer-focus:px-2
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:top-1/2
          peer-focus:top-2
	        peer-focus:scale-75
	        peer-focus:-translate-y-4
          ${formatPrice ? 'left-9' : 'left-4'}
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
