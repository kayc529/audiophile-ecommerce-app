import { Address, AddressFormInfo } from './interface';

export const convertAddressToFormInfo = (address: Address): AddressFormInfo => {
  let formInfo: AddressFormInfo = {};

  formInfo.name = { value: address.attn, isError: false };
  formInfo.phoneNumber = { value: address.phoneNumber, isError: false };
  formInfo.unit = { value: address.unit || '', isError: false };
  formInfo.street = { value: address.street, isError: false };
  formInfo.city = { value: address.city, isError: false };
  formInfo.state = { value: address.state, isError: false };
  formInfo.postalCode = { value: address.postalCode, isError: false };
  formInfo.country = { value: address.country, isError: false };

  return formInfo;
};
