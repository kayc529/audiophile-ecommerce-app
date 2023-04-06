import React from 'react';

interface Props {
  title: string;
  amount: number;
  highLightAmount?: boolean;
}

export default function SummaryPricingRow({
  title,
  amount,
  highLightAmount = false,
}: Props) {
  return (
    <div className='w-full flex justify-between'>
      <p className='uppercase text-start text-lg tracking-lg leading-lg opacity-50'>
        {title}
      </p>
      {highLightAmount ? (
        <p className='text-darkOrange text-lg text-end tracking-lg leading-lg font-bold'>
          $ {amount.toLocaleString()}
        </p>
      ) : (
        <p className='text-lg text-end tracking-lg leading-lg font-bold'>
          $ {amount.toLocaleString()}
        </p>
      )}
    </div>
  );
}
