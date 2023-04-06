import React, { useState } from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import Summary from '../components/checkout/Summary';
import { TertiaryButton } from '../components/common';
import { CheckoutFormInfo } from '../utils/interface';
import { initialCheckFormInfo } from '../data/initialValues';

export default function CheckoutPage() {
  const [info, setInfo] = useState<CheckoutFormInfo>(initialCheckFormInfo);

  const onInputChange = (newInfo: CheckoutFormInfo) => {
    let temp = { ...info, ...newInfo };
    setInfo(temp);
  };

  const checkOut = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    console.log('checkout');
  };

  return (
    <section className='w-full flex flex-col items-center bg-mainGrey lg:pt-[90px] lg:pb-30'>
      <article className='w-full max-w-mainContentMobile flex flex-col md:max-w-mainContentTablet lg:max-w-mainContent lg:space-y-10'>
        <TertiaryButton left={true} text='go back' />
        <div className='flex lg:flex-row lg:space-x-7'>
          <CheckoutForm info={info} onInfoChange={onInputChange} />
          <Summary onCheckOut={checkOut} />
        </div>
      </article>
    </section>
  );
}
