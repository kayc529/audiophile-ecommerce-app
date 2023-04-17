import { CheckoutFormInfo, LoginRegisterFormInfo } from '../utils/interface';

const initialInfoObjectValue = {
  value: '',
  isError: false,
};

export const initialCheckFormInfo: CheckoutFormInfo = {
  name: initialInfoObjectValue,
  email: initialInfoObjectValue,
  phoneNumber: initialInfoObjectValue,
  suite: initialInfoObjectValue,
  street: initialInfoObjectValue,
  city: initialInfoObjectValue,
  state: initialInfoObjectValue,
  postalCode: initialInfoObjectValue,
  country: initialInfoObjectValue,
  paymentMethod: initialInfoObjectValue,
  eMoneyNumber: initialInfoObjectValue,
  eMoneyPin: initialInfoObjectValue,
};

export const initialLoginFormInfo: LoginRegisterFormInfo = {
  email: initialInfoObjectValue,
  password: initialInfoObjectValue,
};

export const initialRegisterFormInfo: LoginRegisterFormInfo = {
  email: initialInfoObjectValue,
  firstName: initialInfoObjectValue,
  lastName: initialInfoObjectValue,
  password: initialInfoObjectValue,
  retypePassword: initialInfoObjectValue,
};
