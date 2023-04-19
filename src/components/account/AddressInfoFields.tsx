import React from 'react';
import { Address } from '../../utils/interface';
import {
  FormTextField,
  PrimaryButton,
  SecondaryButton,
  SelectField,
} from '../common';

interface Props {
  address: Address | undefined;
  onCancel?: () => void;
  onUpdate?: () => void;
}

export default function AddressInfoFields({
  onCancel,
  onUpdate,
  address,
}: Props) {
  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();

    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form className='w-2/3 flex flex-col'>
      <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <FormTextField title='Recipent' name='attn' />
        <FormTextField title='unit' name='unit' />
        <FormTextField title='street1' name='street1' />
        <FormTextField title='city' name='city' />
        <SelectField selections={[]} title='state' name='state' />
        <FormTextField title='postal Code' name='postalCode' />
        <SelectField selections={[]} title='country' name='country' />
      </div>

      <div className='py-6 flex space-x-4'>
        <SecondaryButton text='cancel' onButtonClick={cancel} />
        <PrimaryButton text='Update' />
      </div>
    </form>
  );
}
