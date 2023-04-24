import React, { useEffect, useState } from 'react';
import { dummySavedAddresses } from '../data/dummy-saved-address';
import SavedAddress from '../components/account/SavedAddress';
import { Address, AddressFormInfo } from '../utils/interface';
import AddressInfoFields from '../components/account/AddressInfoFields';
import { convertAddressToFormInfo } from '../utils/addressHelper';
import AddShippingAddressButton from '../components/account/AddShippingAddressButton';
import { FIELD_NAMES, isInputFieldValid } from '../utils/formValidationHelper';
import { TOAST_MESSAGE_TYPE, toastMessage } from '../utils/toastHelper';

export default function SavedAddressesPage() {
  const [isNew, setIsNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | undefined>(
    undefined
  );
  const [input, setInput] = useState<AddressFormInfo>({});

  useEffect(() => {
    if (currentAddress) {
      //convert address to address form info object
      setInput(convertAddressToFormInfo(currentAddress));
    } else {
      setInput({});
    }
  }, [currentAddress]);

  const toggleEditAddress = (address?: Address) => {
    //close add new address
    if (isNew) {
      toggleNewAddress();
    }

    setCurrentAddress(isEdit ? undefined : address);
    setIsEdit((prev) => !prev);
  };

  const toggleNewAddress = () => {
    if (!isNew) {
      //check saved address count
      //toast message if save address === 3
    }

    //close edit address
    if (isEdit) {
      toggleEditAddress();
    }

    setInput({});
    setIsNew((prev) => !prev);
  };

  const onInputChange = (newInput: AddressFormInfo) => {
    let temp = { ...input, ...newInput };
    //reset states when country is changed
    if (newInput.country) {
      temp.state = { value: '', isError: false };
    }
    setInput(temp);
  };

  const updateAddress = () => {
    if (!isInputValid()) {
      toastMessage('Please check your input', TOAST_MESSAGE_TYPE.ERROR);
      return;
    }

    //TODO call api
    toggleEditAddress();
    toastMessage('Address updated', TOAST_MESSAGE_TYPE.SUCCESS);
  };

  const addNewAddress = () => {
    if (!isInputValid()) {
      toastMessage('Please check your input', TOAST_MESSAGE_TYPE.ERROR);
      return;
    }

    //TODO call api
    toggleNewAddress();
    toastMessage('Address added', TOAST_MESSAGE_TYPE.SUCCESS);
  };

  const removeAddress = (address: Address) => {
    //TODO remove address api
  };

  const setAddressAsDefault = (address: Address) => {
    //TODO set address as default api
  };

  const isInputValid = (): boolean => {
    return (
      isNameValid() &&
      isStreetValid() &&
      isCityValid() &&
      isStateValid() &&
      isPostalCodeValid() &&
      isCountryValid()
    );
  };

  const onFieldValidated = (feedback: AddressFormInfo) => {
    let temp = { ...input, ...feedback };
    setInput(temp);
  };

  const isNameValid = () => {
    return isInputFieldValid(FIELD_NAMES.NAME, input.name, onFieldValidated);
  };

  const isStreetValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.STREET,
      input.street,
      onFieldValidated
    );
  };

  const isCityValid = () => {
    return isInputFieldValid(FIELD_NAMES.CITY, input.city, onFieldValidated);
  };

  const isStateValid = () => {
    return isInputFieldValid(FIELD_NAMES.STATE, input.state, onFieldValidated);
  };

  const isPostalCodeValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.POSTAL_CODE,
      input.postalCode,
      onFieldValidated
    );
  };

  const isCountryValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.COUNTRY,
      input.country,
      onFieldValidated
    );
  };

  return (
    <article className='w-full md:pl-10'>
      <h2 className='pb-10 text-h3 leading-h3 tracking-h3 font-bold'>
        Saved Addresses
      </h2>
      {/* Saved addresses list */}
      {isEdit ? (
        <>
          <h4 className='pb-6 capitalize text-h5 tracking-h5'>edit address</h4>
          <AddressInfoFields
            address={input}
            onCancel={toggleEditAddress}
            onUpdate={updateAddress}
            onInputChange={onInputChange}
          />
        </>
      ) : (
        <ul className='grid gap-x-5 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
          {dummySavedAddresses.map((address, index) => {
            return (
              <SavedAddress
                key={index}
                address={address}
                onEdit={toggleEditAddress}
                onRemove={removeAddress}
                onSetAsDefault={setAddressAsDefault}
              />
            );
          })}
        </ul>
      )}

      {/* Breaking line */}
      <div className='my-9 w-full h-[1px] bg-black opacity-30'></div>

      {/* Add shipping address button */}
      {isNew ? (
        <>
          <h4 className='pb-6 capitalize text-h5 tracking-h5'>
            add new address
          </h4>
          <AddressInfoFields
            address={input}
            onCancel={toggleNewAddress}
            onUpdate={addNewAddress}
            onInputChange={onInputChange}
          />
        </>
      ) : (
        <AddShippingAddressButton onButtonClick={toggleNewAddress} />
      )}
    </article>
  );
}
