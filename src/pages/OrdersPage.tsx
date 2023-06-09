import React, { useEffect } from 'react';
import OrderRecord from '../components/account/OrderRecord';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getOrders } from '../features/order/orderSlice';

export default function OrdersPage() {
  const { orders } = useSelector((state: RootState) => state.order);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <article className='w-full md:pl-10'>
      <h2 className='pb-10 text-h3 leading-h3 tracking-h3 font-bold'>Orders</h2>
      <ul className='w-full flex flex-col space-y-10'>
        {orders.map((order) => {
          return <OrderRecord key={order._id} order={order} />;
        })}
      </ul>
    </article>
  );
}
