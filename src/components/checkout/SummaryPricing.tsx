import React from 'react';
import { dummyCartItems } from '../../data/cart-data';
import { PrimaryButton, PricingRow } from '../common';
import {
  calculateGrandTotalAmount,
  calculateShipping,
  calculateTotalAmount,
  calculateVAT,
} from '../../utils/checkoutAmountHelper';
interface Props {
  onCheckout?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export default function SummaryPricing({ onCheckout }: Props) {
  return (
    <div className='w-full flex flex-col'>
      <PricingRow title='total' amount={calculateTotalAmount(dummyCartItems)} />
      <PricingRow title='shipping' amount={calculateShipping()} />
      <PricingRow
        title='vat (included)'
        amount={calculateVAT(dummyCartItems)}
      />
      <div className='py-6'>
        <PricingRow
          title='grandtotal'
          amount={calculateGrandTotalAmount(dummyCartItems)}
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
