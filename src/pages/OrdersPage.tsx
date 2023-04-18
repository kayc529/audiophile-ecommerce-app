import React from 'react';
import OrderRecord from '../components/account/OrderRecord';
import { dummyOrders } from '../data/dummy-orders-data';

type Props = {};

export default function OrdersPage({}: Props) {
  return (
    <article className='w-full md:pl-10'>
      <h2 className='pb-10 text-h3 leading-h3 tracking-h3'>Orders</h2>
      <ul className='w-full flex flex-col space-y-10'>
        {dummyOrders.map((order) => {
          return <OrderRecord key={order.id} order={order} />;
        })}
      </ul>
    </article>
  );
}
