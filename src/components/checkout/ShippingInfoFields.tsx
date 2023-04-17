import React from 'react';
import { CheckoutFormInfo } from '../../utils/interface';
import { FormTextField, SelectField } from '../common';
import {
  CANADA_PROVINCES,
  CHECKOUT_FORM_COUNTRIES,
  US_STATES,
} from '../../utils/constants';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChanged?: (newInfo: CheckoutFormInfo) => void;
}

export default function ShippingInfoFields({ info, onInfoChanged }: Props) {
  return (
    <div className='w-full flex flex-col space-y-6'>
      {/* <FormTextField
        title='address'
        name='address'
        placeholder='1137 Williams Avenue'
        value={info?.address?.value}
        isError={info?.address?.isError}
        errorMsg={info?.address?.errorMsg}
        onInputChange={onInfoChanged}
      /> */}
      <div className='grid gap-y-6 md:grid-rows-2 md:grid-cols-2 md:gap-x-4'>
        <FormTextField
          title='Apt./Suite/Unit/Building (Optional)'
          name='suite'
          placeholder='1201'
          value={info?.suite?.value}
          isError={info?.suite?.isError}
          errorMsg={info?.suite?.errorMsg}
          onInputChange={onInfoChanged}
        />
        <FormTextField
          title='Street address'
          name='street'
          placeholder='1137 Williams Avenue'
          value={info?.street?.value}
          isError={info?.street?.isError}
          errorMsg={info?.street?.errorMsg}
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
        {info?.country?.value ? (
          <SelectField
            selections={
              info.country.value === 'Canada' ? CANADA_PROVINCES : US_STATES
            }
            title={
              info.country.value === 'Canada' ? 'Province/Territory' : 'State'
            }
            name='state'
            value={info?.state?.value}
            isError={info?.state?.isError}
            errorMsg={info?.state?.errorMsg}
            onSelectionChange={onInfoChanged}
          />
        ) : (
          <div></div>
        )}

        <FormTextField
          title='postal code'
          name='postalCode'
          placeholder='10001'
          value={info?.postalCode?.value}
          isError={info?.postalCode?.isError}
          errorMsg={info?.postalCode?.errorMsg}
          onInputChange={onInfoChanged}
        />
        <SelectField
          selections={CHECKOUT_FORM_COUNTRIES}
          title='country'
          name='country'
          value={info?.country?.value}
          placeholder='Select your country'
          isError={info?.country?.isError}
          errorMsg={info?.country?.errorMsg}
          onSelectionChange={onInfoChanged}
        />
      </div>
    </div>
  );
}
