import React from 'react';
import { CartItem } from '../../utils/interface';
import Counter from './Counter';

interface Props {
  cartItem: CartItem;
}

export default function CartModalItem({ cartItem }: Props) {
  return (
    <li className='flex justify-between items-center'>
      <div className='flex space-x-4 items-center'>
        <img
          className='w-16 h-16 rounded-lg object-cover'
          src={cartItem.thumbnail}
          alt=''
        />
        <div>
          <p className='text-lg tracking-lg font-bold'>
            {cartItem.productCode}
          </p>
          <p className='text-lg tracking-lg font-bold opacity-50'>
            $ {cartItem.price.toLocaleString()}
          </p>
        </div>
      </div>
      <Counter />
    </li>
  );
}
