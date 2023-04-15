import React, { useState } from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import Summary from '../components/checkout/Summary';
import { TertiaryButton } from '../components/common';
import { CheckoutFormInfo } from '../utils/interface';
import { initialCheckFormInfo } from '../data/initialValues';
import { Navigate, useNavigate } from 'react-router-dom';
import OrderCompletedModal from '../components/checkout/OrderCompletedModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleOrderComplete } from '../features/modal/modalSlice';
import {
  validateNotBlankField,
  validateEmail,
  validatePhoneNumber,
  validateNumberOnlyField,
  validateEMoneyNumber,
} from '../utils/formValidationHelper';
import { TOAST_MESSAGE_TYPE, toastMessage } from '../utils/toastHelper';
import { removeCartInLocalStorage } from '../utils/localStorageHelper';
import { removeAllCartItems } from '../features/user/userSlice';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOrderCompleteOpen } = useSelector(
    (state: RootState) => state.modal
  );
  const { cartItems } = useSelector((state: RootState) => state.user);
  const [info, setInfo] = useState<CheckoutFormInfo>(initialCheckFormInfo);

  const onInputChange = (newInfo: CheckoutFormInfo) => {
    let temp = { ...info, ...newInfo };
    setInfo(temp);
  };

  const checkOut = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    if (!isFormInfoValid()) {
      toastMessage('Please check your input', TOAST_MESSAGE_TYPE.ERROR);
      return;
    }

    //call api to create order

    dispatch(toggleOrderComplete());
  };

  const isFormInfoValid = (): boolean => {
    return (
      isNameInfoValid() &&
      isEmailInfoValid() &&
      isPhoneNumberInfoValid() &&
      isAddressInfoValid() &&
      isZipCodeInfoValid() &&
      isCityInfoValid() &&
      isCountryValid() &&
      isPaymentMethodValid()
    );
  };

  const isNameInfoValid = (): boolean => {
    const infoAfterValidation = validateNotBlankField(info.name);
    onInputChange({ name: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isEmailInfoValid = (): boolean => {
    const infoAfterValidation = validateEmail(info.email);
    onInputChange({ email: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isPhoneNumberInfoValid = () => {
    const infoAfterValidation = validatePhoneNumber(info.phoneNumber);
    onInputChange({ phoneNumber: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isAddressInfoValid = () => {
    const infoAfterValidation = validateNotBlankField(info.address);
    onInputChange({ address: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isZipCodeInfoValid = () => {
    const infoAfterValidation = validateNotBlankField(info.zipCode);
    onInputChange({ zipCode: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isCityInfoValid = () => {
    const infoAfterValidation = validateNotBlankField(info.city);
    onInputChange({ city: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isCountryValid = () => {
    const infoAfterValidation = validateNotBlankField(info.country);
    onInputChange({ country: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isPaymentMethodValid = () => {
    const infoAfterValidation = validateNotBlankField(info.paymentMethod);
    onInputChange({ paymentMethod: infoAfterValidation });

    if (info.paymentMethod?.value === 'emoney') {
      return isEMoneyNumberValid() && isEMoneyPinValid();
    }

    return !infoAfterValidation.isError;
  };

  const isEMoneyNumberValid = () => {
    const infoAfterValidation = validateEMoneyNumber(info.eMoneyNumber);
    onInputChange({ eMoneyNumber: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const isEMoneyPinValid = () => {
    const infoAfterValidation = validateNumberOnlyField(info.eMoneyPin);
    onInputChange({ eMoneyPin: infoAfterValidation });
    return !infoAfterValidation.isError;
  };

  const goBack = () => {
    navigate(-1);
  };

  //if cart is empty, avoid showing an invalid checkout page by forcing the user
  //back to home page
  if (cartItems.length === 0) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <section className='w-full pt-4 pb-25 flex flex-col items-center bg-mainGrey md:px-6 md:pt-12 md:pb-30 lg:pt-[90px]'>
      <article className='w-full max-w-mainContentMobile flex flex-col space-y-6 md:max-w-mainContentTablet lg:max-w-mainContent lg:space-y-10'>
        <TertiaryButton left={true} text='go back' onButtonClick={goBack} />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-7 lg:space-y-0'>
          <CheckoutForm info={info} onInfoChange={onInputChange} />
          <Summary onCheckOut={checkOut} />
        </div>
      </article>

      {/* Order Complete modal */}
      {isOrderCompleteOpen && (
        <div className='z-modalDialog absolute w-max h-max top-[215px] left-0 right-0 mx-auto'>
          <OrderCompletedModal />
        </div>
      )}
    </section>
  );
}
