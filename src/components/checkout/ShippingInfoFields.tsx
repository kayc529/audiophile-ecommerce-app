import React from 'react';
import { CheckoutFormInfo } from '../../utils/interface';
import { FormTextField, SelectField } from '../common';
import { CHECKOUT_FORM_COUNTRIES } from '../../utils/constants';

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
        placeholder='1137 Williams Avenue'
        value={info?.address?.value}
        isError={info?.address?.isError}
        errorMsg={info?.address?.errorMsg}
        onInputChange={onInfoChanged}
      />
      <div className='grid gap-y-6 md:grid-rows-2 md:grid-cols-2 md:gap-x-4'>
        <FormTextField
          title='ZIP code'
          name='zipCode'
          placeholder='10001'
          value={info?.zipCode?.value}
          isError={info?.zipCode?.isError}
          errorMsg={info?.zipCode?.errorMsg}
          onInputChange={onInfoChanged}
        />
        <FormTextField
          title='city'
          name='city'
          placeholder='New York'
          value={info?.city?.value}
          isError={info?.city?.isError}
          errorMsg={info?.city?.errorMsg}
          onInputChange={onInfoChanged}
        />
        <SelectField
          selections={CHECKOUT_FORM_COUNTRIES}
          title='country'
          value={info?.country?.value}
          isError={info?.country?.isError}
          errorMsg={info?.country?.errorMsg}
          onSelectionChange={onInfoChanged}
        />
      </div>
    </div>
  );
}
