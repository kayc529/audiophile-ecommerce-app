import React from 'react';
import { CheckoutFormInfo } from '../../utils/interface';
import InputFieldsSharedLayout from './InputFieldsSharedLayout';
import ShippingInfoFields from './ShippingInfoFields';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChange?: (newInfo: CheckoutFormInfo) => void;
}

export default function ShippingInfo({ info, onInfoChange }: Props) {
  return (
    <InputFieldsSharedLayout title='shipping info'>
      <ShippingInfoFields />
    </InputFieldsSharedLayout>
  );
}
