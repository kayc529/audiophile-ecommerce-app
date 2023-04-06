import React from 'react';
import { CheckoutFormInfo } from '../../utils/interface';
import { FormRadioSelection, FormTextField } from '../common';
import CashPaymentInfo from './CashPaymentInfo';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChange?: (newInfo: CheckoutFormInfo) => void;
}

export default function PaymentDetailsFields({ info, onInfoChange }: Props) {
  const onPaymentMethodChanged = (newPaymentMethod: string) => {
    if (onInfoChange) {
      let temp: CheckoutFormInfo = { paymentMethod: newPaymentMethod };
      if (newPaymentMethod === 'cash') {
        temp = {
          ...temp,
          eMoneyNumber: { value: '', isError: false },
          eMoneyPin: { value: '', isError: false },
        };
      }
      onInfoChange(temp);
    }
  };

  const onInputChange = (newInfo: CheckoutFormInfo) => {
    if (onInfoChange) {
      onInfoChange(newInfo);
    }
  };

  const isUsingEMoney = () => {
    return info?.paymentMethod === 'emoney';
  };

  const isUsingCash = () => {
    return info?.paymentMethod === 'cash';
  };

  return (
    <div className='w-full flex flex-col space-y-6'>
      <div className='w-full flex space-x-4'>
        <p className='w-1/2 capitalize text-start text-sm font-bold'>
          payment method
        </p>
        <fieldset className='w-1/2 space-y-4'>
          <FormRadioSelection
            id='emoney'
            label='e-Money'
            name='paymentMethod'
            onCheckChange={onPaymentMethodChanged}
            isChecked={info?.paymentMethod === 'emoney'}
          />
          <FormRadioSelection
            id='cash'
            label='Cash'
            name='paymentMethod'
            onCheckChange={onPaymentMethodChanged}
            isChecked={info?.paymentMethod === 'cash'}
          />
        </fieldset>
      </div>
      {isUsingEMoney() && (
        <div className='grid grid-rows-1 grid-cols-2 gap-x-4'>
          <FormTextField
            title='e-Money Number'
            name='eMoneyNumber'
            placeholder='238521993'
            onInputChange={onInputChange}
          />
          <FormTextField
            title='e-Money Pin'
            name='eMoneyPin'
            placeholder='6891'
            onInputChange={onInputChange}
          />
        </div>
      )}
      {isUsingCash() && <CashPaymentInfo />}
    </div>
  );
}
