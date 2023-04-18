import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountSideBar from './AccountSideBar';

type Props = {};

export default function UserAccountSharedLayout({}: Props) {
  return (
    <div className='w-mainContentMobile py-16 flex flex-col-reverse md:flex-row md:w-full md:max-w-mainContentTablet lg:max-w-mainContent'>
      <AccountSideBar />
      <Outlet />
    </div>
  );
}
