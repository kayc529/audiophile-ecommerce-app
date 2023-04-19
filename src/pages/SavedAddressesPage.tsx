import React, { useState } from 'react';
import { dummySavedAddresses } from '../data/dummy-saved-address';
import SavedAddress from '../components/account/SavedAddress';
import { AiOutlinePlus } from 'react-icons/ai';
import { Address } from '../utils/interface';
import AddressInfoFields from '../components/account/AddressInfoFields';

export default function SavedAddressesPage() {
  const [isNew, setIsNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | undefined>(
    undefined
  );

  const toggleEditAddress = (address?: Address) => {
    if (isEdit) {
      setCurrentAddress(undefined);
      setIsEdit(false);
    } else {
      setCurrentAddress(address);
      setIsEdit(true);
    }
  };

  return (
    <article className='w-full md:pl-10'>
      <h2 className='pb-10 text-h3 leading-h3 tracking-h3 font-bold'>
        Saved Addresses
      </h2>
      {/* Saved addresses list */}
      {isEdit ? (
        <AddressInfoFields
          address={currentAddress}
          onCancel={toggleEditAddress}
        />
      ) : (
        <ul className='grid grid-cols-3 gap-x-5 gap-y-4'>
          {dummySavedAddresses.map((address, index) => {
            return (
              <SavedAddress
                key={index}
                address={address}
                onEdit={toggleEditAddress}
              />
            );
          })}
        </ul>
      )}

      {/* Breaking line */}
      <div className='mt-9 w-full h-[1px] bg-black opacity-30'></div>

      {/* Add shipping address button */}
      <div className='mt-8 flex items-center cursor-pointer'>
        <AiOutlinePlus className='w-6 h-6' />
        <p className='pl-2 text-lg font-bold hover:underline'>
          Add shipping address
        </p>
      </div>
    </article>
  );
}
