import React from 'react';
import { Address } from '../../utils/interface';
import { MdOutlineModeEditOutline } from 'react-icons/md';
interface Props {
  address: Address;
  onEdit?: (address: Address) => void;
  onRemove?: (address: Address) => void;
  onSetAsDefault?: (address: Address) => void;
}

export default function SavedAddress({
  onEdit,
  onRemove,
  onSetAsDefault,
  address,
}: Props) {
  const editAddress = () => {
    if (onEdit) {
      onEdit(address);
    }
  };

  const removeAddress = () => {
    if (onRemove) {
      onRemove(address);
    }
  };

  const setAddressAsDefault = () => {
    if (onSetAsDefault) {
      onSetAsDefault(address);
    }
  };

  return (
    <div className='relative w-auto h-[256px] p-8 flex flex-col justify-between border-[1px] border-black rounded-lg'>
      <div className='flex flex-col'>
        <p className='text-lg tracking-lg leading-lg'>{address.attn}</p>
        <p className='text-lg tracking-lg leading-lg'>
          {address.street} {address.unit}
        </p>
        <p className='text-lg tracking-lg leading-lg'>
          {address.city}, {address.state}
        </p>
        <p className='text-lg tracking-lg leading-lg'>{address.postalCode}</p>
        <p className='text-lg tracking-lg leading-lg'>{address.country}</p>
        {address.isDefault && (
          <p className='text-lg tracking-lg leading-lg opacity-50'>
            Default shipping address
          </p>
        )}
      </div>
      <div className='pt-4 flex'>
        <p
          className='pr-2 text-darkOrange text-md cursor-pointer hover:underline'
          onClick={editAddress}
        >
          Edit
        </p>
        <span>|</span>
        <p
          className='px-2 text-darkOrange text-md cursor-pointer hover:underline'
          onClick={removeAddress}
        >
          Remove
        </p>
        {address.isDefault || (
          <>
            <span>|</span>
            <p
              className='pl-2 text-darkOrange text-md cursor-pointer hover:underline'
              onClick={setAddressAsDefault}
            >
              Set as Default
            </p>
          </>
        )}
      </div>
    </div>
  );
}
