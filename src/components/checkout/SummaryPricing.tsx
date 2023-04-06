import React from 'react';
import { dummyCartItems } from '../../data/cart-data';
import { PrimaryButton } from '../common';
import SummaryPricingRow from './SummaryPricingRow';
interface Props {
  onCheckout?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export default function SummaryPricing({ onCheckout }: Props) {
  const shipping = 50;

  const total = dummyCartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  const vat = (total + shipping) * 0.13;

  const grandTotal = total + shipping + vat;

  return (
    <div className='w-full flex flex-col'>
      <SummaryPricingRow title='total' amount={total} />
      <SummaryPricingRow title='shipping' amount={shipping} />
      <SummaryPricingRow title='vat (included)' amount={vat} />
      <div className='py-6'>
        <SummaryPricingRow
          title='grandtotal'
          amount={grandTotal}
          highLightAmount={true}
        />
      </div>
      <PrimaryButton
        text='continue & pay'
        fullSize={true}
        onButtonClick={onCheckout}
      />
    </div>
  );
}
