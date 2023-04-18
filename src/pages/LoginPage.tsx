import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../components/common';
import LoginInputFields from '../components/login/LoginInputFields';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginRegisterFormInfo } from '../utils/interface';
import { FIELD_NAMES, isInputFieldValid } from '../utils/formValidationHelper';
import { TOAST_MESSAGE_TYPE, toastMessage } from '../utils/toastHelper';
import { initialLoginFormInfo } from '../data/initialValues';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function LoginPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [input, setInput] =
    useState<LoginRegisterFormInfo>(initialLoginFormInfo);

  const login = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();

    if (!isInputValid()) {
      toastMessage('Please check your input', TOAST_MESSAGE_TYPE.ERROR);
      return;
    }

    //TODO login api
    toastMessage('Logged in!', TOAST_MESSAGE_TYPE.SUCCESS);
  };

  const goToRegister = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    navigate('/register');
  };

  const onInputChange = (newInput: LoginRegisterFormInfo) => {
    let temp = { ...input, ...newInput };
    setInput(temp);
  };

  const isInputValid = () => {
    return isEmailValid() && isPasswordValid();
  };

  const isEmailValid = () => {
    return isInputFieldValid(FIELD_NAMES.EMAIL, input.email, onInputChange);
  };

  const isPasswordValid = (): boolean => {
    return isInputFieldValid(
      FIELD_NAMES.PASSWORD,
      input.password,
      onInputChange
    );
  };

  //if user is logged in, redirect to account page
  if (user) {
    return <Navigate to='/my-account/orders' replace={true} />;
  }

  return (
    <section className='w-mainContentMobile py-20 flex justify-center md:w-mainContentTablet lg:w-full lg:max-w-mainContent'>
      <form className='relative w-[327px] p-6 border border-darkgrey rounded-lg flex flex-col items-start md:w-[450px] md:p-10'>
        <div className='absolute top-0 left-0 right-0 mx-auto w-30 h-3 bg-darkOrange'></div>

        <h2 className='pb-6 text-h3 tracking-h3 leading-h3 font-bold'>Login</h2>
        <LoginInputFields info={input} onInputChange={onInputChange} />

        <div className='w-full pt-6'>
          <PrimaryButton text='login' fullSize={true} onButtonClick={login} />
        </div>

        <div className='relative w-full h-[1px] bg-darkGrey mt-12 mb-6'>
          <p className='absolute -top-3 left-0 right-0 w-max mx-auto px-3 text-md tracking-lg font-bold bg-white'>
            New customer?
          </p>
        </div>

        <SecondaryButton
          text='Register here'
          darkMode={true}
          fullSize={true}
          onButtonClick={goToRegister}
        />
      </form>
    </section>
  );
}
