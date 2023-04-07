import React from 'react';
import { dummyCartItems } from '../../data/cart-data';
import CartModalItem from './CartModalItem';
import PrimaryButton from './PrimaryButton';
import PricingRow from './PricingRow';
import { calculateTotalAmount } from '../../utils/checkoutAmountHelper';

interface Props {}

export default function CartModal({}: Props) {
  return (
    <aside className='w-mainContentMobile px-7 py-8 bg-white rounded-lg flex flex-col space-y-8 md:w-cartModal md:px-8'>
      <div className='flex justify-between items-center'>
        <h6 className='uppercase text-h6 tracking-h6 font-bold'>
          cart ({dummyCartItems.length})
        </h6>
        <button className='underline w-max h-max text-lg tracking-lg opacity-50'>
          Remove all
        </button>
      </div>
      <ul className='flex flex-col space-y-6'>
        {dummyCartItems.map((cartItem) => {
          return <CartModalItem key={cartItem.productId} cartItem={cartItem} />;
        })}
      </ul>
      <div className='flex flex-col space-y-6'>
        <PricingRow
          title='total'
          amount={calculateTotalAmount(dummyCartItems)}
        />
        <PrimaryButton text='checkout' fullSize={true} />
      </div>
    </aside>
  );
}
