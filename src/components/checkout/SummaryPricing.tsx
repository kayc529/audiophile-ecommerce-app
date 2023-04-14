import React from 'react';
import { dummyCartItems } from '../../data/cart-data';
import { PrimaryButton, PricingRow } from '../common';
import {
  calculateGrandTotalAmount,
  calculateShipping,
  calculateTotalAmount,
  calculateVAT,
} from '../../utils/checkoutAmountHelper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
interface Props {
  onCheckout?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export default function SummaryPricing({ onCheckout }: Props) {
  const { cartItems } = useSelector((state: RootState) => state.user);

  return (
    <div className='w-full flex flex-col'>
      <PricingRow title='total' amount={calculateTotalAmount(cartItems)} />
      <PricingRow title='shipping' amount={calculateShipping()} />
      <PricingRow title='vat (included)' amount={calculateVAT(cartItems)} />
      <div className='py-6'>
        <PricingRow
          title='grandtotal'
          amount={calculateGrandTotalAmount(cartItems)}
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
