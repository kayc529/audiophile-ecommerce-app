import React from 'react';
import { CartItem } from '../../utils/interface';
import Counter from './Counter';
import { useDispatch } from 'react-redux';
import {
  modifyCartItemQuantity,
  removeItemFromCart,
} from '../../features/user/userSlice';
var _ = require('lodash');

interface Props {
  cartItem: CartItem;
}

export default function CartModalItem({ cartItem }: Props) {
  const dispatch = useDispatch();

  const countChanged = (newCount: number) => {
    //TODO if the newCount is 0
    //remove item
    if (newCount !== cartItem.quantity) {
      if (newCount === 0) {
        dispatch(removeItemFromCart(cartItem));
        return;
      }

      let newCartItem = _.cloneDeep(cartItem);
      newCartItem.quantity = newCount;
      dispatch(modifyCartItemQuantity(newCartItem));
    }
  };

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
      <Counter
        forCart={true}
        count={cartItem.quantity}
        onCountChanged={countChanged}
      />
    </li>
  );
}
