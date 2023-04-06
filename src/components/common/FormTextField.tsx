import React, { useState } from 'react';
import { CheckoutFormInfo } from '../../utils/interface';

interface FormTextFieldProps {
  title: string;
  name: string;
  value?: string | undefined;
  inputType?: string;
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  onInputChange?: (info: CheckoutFormInfo) => void;
}

const FormTextField = ({
  title,
  name,
  value,
  inputType = 'text',
  placeholder = '',
  isError = false,
  errorMsg = '',
  onInputChange,
}: FormTextFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      let temp: CheckoutFormInfo = { [e.target.name]: e.target.value };
      onInputChange(temp);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='flex justify-between'>
        <p
          className={`capitalize text-sm font-bold ${
            isError && ' text-errorRed'
          }`}
        >
          {title}
        </p>
        {isError && (
          <p className='capitalize text-sm text-errorRed'>{errorMsg}</p>
        )}
      </div>
      <input
        className={`w-full h-textField px-6 py-4 mt-2 text-md font-bold rounded-lg caret-darkOrange focus:outline-none ${
          isError
            ? 'border-2 border-errorRed'
            : 'border border-darkGrey focus:border-mainOrange'
        }`}
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextField;
