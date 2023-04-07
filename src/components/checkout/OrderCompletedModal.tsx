import React from 'react';
import { PrimaryButton } from '../common';
import OrderSummary from './OrderSummary';

type Props = {};

export default function OrderCompletedModal({}: Props) {
  return (
    <aside className='w-mainContentMobile p-8 rounded-lg bg-white flex flex-col md:w-[540px] md:p-12'>
      <div className='w-16 h-16 rounded-full bg-darkOrange'>
        <img
          className='m-auto'
          src='/assets/checkout/icon-order-confirmation.svg'
          alt=''
        />
      </div>
      <h3 className='w-[284px] pt-8 uppercase text-h3 leading-h3 tracking-h3 font-bold'>
        thank you for your order
      </h3>
      <p className='pt-6 pb-8 text-lg tracking-lg opacity-50'>
        You will receive an email confirmation shortly.
      </p>
      <OrderSummary />
      <div className='w-full pt-12'>
        <PrimaryButton text='back to home' fullSize={true} />
      </div>
    </aside>
  );
}
