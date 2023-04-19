import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import LoginUserDropdownMenu from './LoginUserDropdownMenu';
import { closeAllModals } from '../../features/modal/modalSlice';

export default function LoginRegisterIcon() {
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToRegister = () => {
    dispatch(closeAllModals());
    navigate('register');
  };

  const goToLogin = () => {
    dispatch(closeAllModals());
    navigate('login');
  };

  return (
    <div className='login-icon relative flex'>
      <HiOutlineUserCircle
        className='w-7 h-7'
        style={{ color: 'white' }}
        onClick={goToLogin}
      />
      {/* Dropdown Menu */}
      <div className='z-50 login-icon-dropdown absolute right-0 top-7 p-6 bg-white rounded-lg drop-shadow-lg flex flex-col items-center'>
        {user ? (
          <div className='flex flex-col items-center space-y-4'>
            <h6 className='w-full text-start text-h6 tracking-h6 font-bold'>
              Hi, {user.firstName}!
            </h6>
            <LoginUserDropdownMenu />
            <PrimaryButton text='logout' />
          </div>
        ) : (
          <>
            <PrimaryButton text='sign in' onButtonClick={goToLogin} />
            <p className='pt-4 text-sm tracking-sm'>New customer?</p>
            <p
              className='text-sm tracking-sm text-darkOrange underline cursor-pointer hover:text-ashBlack'
              onClick={goToRegister}
            >
              Start here.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
