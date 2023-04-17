import React, { useEffect, useState } from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import Summary from '../components/checkout/Summary';
import { TertiaryButton } from '../components/common';
import { CheckoutFormInfo, FormInfo } from '../utils/interface';
import { initialCheckFormInfo } from '../data/initialValues';
import { Navigate, useNavigate } from 'react-router-dom';
import OrderCompletedModal from '../components/checkout/OrderCompletedModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleOrderComplete } from '../features/modal/modalSlice';
import { isInputFieldValid, FIELD_NAMES } from '../utils/formValidationHelper';
import { TOAST_MESSAGE_TYPE, toastMessage } from '../utils/toastHelper';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOrderCompleteOpen } = useSelector(
    (state: RootState) => state.modal
  );
  const { cartItems } = useSelector((state: RootState) => state.user);
  const [info, setInfo] = useState<CheckoutFormInfo>(initialCheckFormInfo);

  const onInputChange = (newInfo: CheckoutFormInfo) => {
    if (newInfo.country) {
      newInfo = { ...newInfo, state: { value: '', isError: false } };
    }

    let temp = { ...info, ...newInfo };
    setInfo(temp);
  };

  const checkOut = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    console.log(info);
    if (!isFormInfoValid()) {
      toastMessage('Please check your input', TOAST_MESSAGE_TYPE.ERROR);
      return;
    }

    //call api to create order
    // dispatch(toggleOrderComplete());
  };

  const isFormInfoValid = (): boolean => {
    return (
      isNameInfoValid() &&
      isEmailInfoValid() &&
      isPhoneNumberInfoValid() &&
      isStreetInfoValid() &&
      isCityInfoValid() &&
      isPostalCodeInfoValid() &&
      isCountryValid() &&
      isStateInfoValid() &&
      isPaymentMethodValid()
    );
  };

  const isNameInfoValid = (): boolean => {
    return isInputFieldValid(FIELD_NAMES.NAME, info.name, onInputChange);
  };

  const isEmailInfoValid = (): boolean => {
    return isInputFieldValid(FIELD_NAMES.EMAIL, info.email, onInputChange);
  };

  const isPhoneNumberInfoValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.PHONE_NUMBER,
      info.phoneNumber,
      onInputChange
    );
  };

  const isStreetInfoValid = () => {
    return isInputFieldValid(FIELD_NAMES.STREET, info.street, onInputChange);
  };

  const isCityInfoValid = () => {
    return isInputFieldValid(FIELD_NAMES.CITY, info.city, onInputChange);
  };

  const isStateInfoValid = () => {
    return isInputFieldValid(FIELD_NAMES.STATE, info.state, onInputChange);
  };

  const isPostalCodeInfoValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.POSTAL_CODE,
      info.postalCode,
      onInputChange
    );
  };

  const isCountryValid = () => {
    return isInputFieldValid(FIELD_NAMES.COUNTRY, info.country, onInputChange);
  };

  const isPaymentMethodValid = () => {
    if (info.paymentMethod?.value === 'emoney') {
      return isEMoneyNumberValid() && isEMoneyPinValid();
    }

    return !isInputFieldValid(
      FIELD_NAMES.PAYMENT_METHOD,
      info.paymentMethod,
      onInputChange
    );
  };

  const isEMoneyNumberValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.E_MONEY_NUMBER,
      info.eMoneyNumber,
      onInputChange
    );
  };

  const isEMoneyPinValid = () => {
    return isInputFieldValid(
      FIELD_NAMES.E_MONEY_PIN,
      info.eMoneyPin,
      onInputChange
    );
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
