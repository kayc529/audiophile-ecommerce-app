import { CheckoutFormInfo } from '../utils/interface';

const initialInfoObjectValue = {
  value: '',
  isError: false,
};

export const initialCheckFormInfo: CheckoutFormInfo = {
  name: initialInfoObjectValue,
  email: initialInfoObjectValue,
  phoneNumber: initialInfoObjectValue,
  address: initialInfoObjectValue,
  zipCode: initialInfoObjectValue,
  city: initialInfoObjectValue,
  country: initialInfoObjectValue,
  paymentMethod: initialInfoObjectValue,
  eMoneyNumber: initialInfoObjectValue,
  eMoneyPin: initialInfoObjectValue,
};
