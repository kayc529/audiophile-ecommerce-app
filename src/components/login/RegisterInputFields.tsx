import React from 'react';
import { FormTextField } from '../common';
import { LoginRegisterFormInfo } from '../../utils/interface';

interface Props {
  info?: LoginRegisterFormInfo;
  onInputChange?: (newInput: LoginRegisterFormInfo) => void;
}

export default function RegisterInputFields({ info, onInputChange }: Props) {
  return (
    <fieldset className='w-full flex flex-col space-y-4'>
      <FormTextField
        title='email'
        name='email'
        isError={info?.email?.isError}
        errorMsg={info?.email?.errorMsg}
        onInputChange={onInputChange}
      />
      <FormTextField
        title='first name'
        name='firstName'
        isError={info?.firstName?.isError}
        errorMsg={info?.firstName?.errorMsg}
        onInputChange={onInputChange}
      />
      <FormTextField
        title='last name'
        name='lastName'
        isError={info?.lastName?.isError}
        errorMsg={info?.lastName?.errorMsg}
        onInputChange={onInputChange}
      />
      <FormTextField
        title='password'
        name='password'
        inputType='password'
        placeholder='At least 6 characters'
        isPasswordField={true}
        isError={info?.password?.isError}
        errorMsg={info?.password?.errorMsg}
        onInputChange={onInputChange}
      />
      <FormTextField
        title='retype password'
        name='retypePassword'
        inputType='password'
        isError={info?.retypePassword?.isError}
        errorMsg={info?.retypePassword?.errorMsg}
        onInputChange={onInputChange}
      />
    </fieldset>
  );
}
