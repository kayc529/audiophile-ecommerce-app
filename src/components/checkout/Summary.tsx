import React from 'react';
import { dummyCartItems } from '../../data/cart-data';
import SummaryCartItem from './SummaryCartItem';
import SummaryPricing from './SummaryPricing';

interface Props {
  onCheckOut?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export default function Summary({ onCheckOut }: Props) {
  return (
    <section className='w-1/3 h-max max-w-[350px] p-8 bg-white rounded-lg flex flex-col'>
      <h6 className='uppercase text-h6 leading-h6 tracking-h6 font-bold'>
        summary
      </h6>
      <ul className='py-8 flex flex-col space-y-6'>
        {dummyCartItems.map((cartItem) => {
          return (
            <SummaryCartItem key={cartItem.productId} cartItem={cartItem} />
          );
        })}
      </ul>
      <SummaryPricing onCheckout={onCheckOut} />
    </section>
  );
}
