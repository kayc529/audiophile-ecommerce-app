import React from 'react';

interface FormTextFieldProps {
  title: string;
  value?: string | number;
  inputType?: string;
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  onInputChange?: (newInput: string) => void;
}

const FormTextField = ({
  title,
  value,
  inputType = 'text',
  placeholder = '',
  isError = false,
  errorMsg = '',
  onInputChange,
}: FormTextFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <div className='w-textField flex flex-col'>
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
            : 'border border-mainGrey focus:border-mainOrange'
        }`}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextField;
