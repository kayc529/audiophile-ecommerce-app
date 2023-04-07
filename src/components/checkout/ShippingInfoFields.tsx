import React from 'react';
import { CheckoutFormInfo } from '../../utils/interface';
import { FormTextField } from '../common';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChanged?: (newInfo: CheckoutFormInfo) => void;
}

export default function ShippingInfoFields({ info, onInfoChanged }: Props) {
  return (
    <div className='w-full flex flex-col space-y-6'>
      <FormTextField
        title='address'
        name='address'
        value={info?.address?.value}
        placeholder='1137 Williams Avenue'
        onInputChange={onInfoChanged}
      />
      <div className='grid gap-y-6 md:grid-rows-2 md:grid-cols-2 md:gap-x-4'>
        <FormTextField
          title='ZIP code'
          name='zipCode'
          value={info?.zipCode?.value}
          placeholder='10001'
          onInputChange={onInfoChanged}
        />
        <FormTextField
          title='city'
          name='city'
          value={info?.city?.value}
          placeholder='New York'
          onInputChange={onInfoChanged}
        />
        <FormTextField
          title='country'
          name='country'
          value={info?.country?.value}
          placeholder='United States'
          onInputChange={onInfoChanged}
        />
      </div>
    </div>
  );
}
