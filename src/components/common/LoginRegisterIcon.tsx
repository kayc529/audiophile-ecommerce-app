import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

export default function LoginRegisterIcon() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('register');
  };

  const goToLogin = () => {
    navigate('login');
  };

  return (
    <div className='login-icon relative flex'>
      <HiOutlineUserCircle
        className='w-7 h-7'
        style={{ color: 'white' }}
        onClick={goToLogin}
      />
      <div className='z-50 login-icon-dropdown absolute right-0 top-7 p-6 bg-white rounded-lg flex flex-col items-center'>
        <PrimaryButton text='sign in' onButtonClick={goToLogin} />
        <p className='pt-4 text-sm tracking-sm'>New customer?</p>
        <p
          className='text-sm tracking-sm text-darkOrange underline cursor-pointer hover:text-ashBlack'
          onClick={goToRegister}
        >
          Start here.
        </p>
      </div>
    </div>
  );
}
