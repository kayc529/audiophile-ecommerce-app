import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  FormTextField,
  FormRadioSelection,
  Counter,
} from '../components/common';
import { useState } from 'react';

const ComponentsDemoPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const onPaymentMethodChanged = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
  };
  return (
    <div>
      <PrimaryButton text='see product' />
      <SecondaryButton text='see product' darkMode={false} />
      <SecondaryButton text='see product' darkMode={true} />
      <TertiaryButton text='shop' />
      <FormTextField
        title='name'
        placeholder='Insert your name'
        errorMsg='Wrong format'
      />
      <fieldset>
        <FormRadioSelection
          id='emoney'
          label='e-Money'
          name='payment-method'
          onCheckChange={onPaymentMethodChanged}
          isChecked={selectedPaymentMethod === 'emoney'}
        />
        <FormRadioSelection
          id='creditcard'
          label='Credit card'
          name='payment-method'
          onCheckChange={onPaymentMethodChanged}
          isChecked={selectedPaymentMethod === 'creditcard'}
        />
      </fieldset>
      <Counter />
    </div>
  );
};

export default ComponentsDemoPage;
