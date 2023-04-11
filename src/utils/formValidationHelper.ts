import { ERROR_MESSAGE } from './constants';
import { InfoObject } from './interface';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_NUMBER_REGEX =
  /^\+?([0-9]{0,3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{3,4})[-. ]([0-9]{3,4})$/;
const EMONEY_NUMBER_REGEX = /^[0-9]{9}$/;
const NUMBER_REGEX = /^[0-9]*$/;

export const validateNotBlankField = (info?: InfoObject) => {
  if (!info || !info.value) {
    info = {
      value: '',
      isError: true,
      errorMsg: ERROR_MESSAGE.BLANK,
    };
  } else {
    info.isError = false;
    info.errorMsg = '';
  }

  return info;
};

export const validateEMoneyNumber = (emoneyNumberInfo?: InfoObject) => {
  if (!emoneyNumberInfo || !emoneyNumberInfo.value) {
    emoneyNumberInfo = {
      value: '',
      isError: true,
      errorMsg: ERROR_MESSAGE.BLANK,
    };
  } else if (!EMONEY_NUMBER_REGEX.test(emoneyNumberInfo.value)) {
    emoneyNumberInfo.isError = true;
    emoneyNumberInfo.errorMsg = ERROR_MESSAGE.INVALID_FORMAT;
  } else {
    emoneyNumberInfo.isError = false;
    emoneyNumberInfo.errorMsg = '';
  }

  return emoneyNumberInfo;
};

export const validateNumberOnlyField = (info?: InfoObject) => {
  if (!info || !info.value) {
    info = {
      value: '',
      isError: true,
      errorMsg: ERROR_MESSAGE.BLANK,
    };
  } else if (!NUMBER_REGEX.test(info.value)) {
    info.isError = true;
    info.errorMsg = ERROR_MESSAGE.INVALID_FORMAT;
  } else {
    info.isError = false;
    info.errorMsg = '';
  }

  return info;
};

export const validateEmail = (emailInfo?: InfoObject) => {
  if (!emailInfo || !emailInfo.value) {
    emailInfo = {
      value: '',
      isError: true,
      errorMsg: ERROR_MESSAGE.BLANK,
    };
  } else if (!EMAIL_REGEX.test(emailInfo.value)) {
    emailInfo.isError = true;
    emailInfo.errorMsg = ERROR_MESSAGE.INVALID_FORMAT;
  } else {
    emailInfo.isError = false;
    emailInfo.errorMsg = '';
  }

  return emailInfo;
};

export const validatePhoneNumber = (phoneNumberInfo?: InfoObject) => {
  if (!phoneNumberInfo || !phoneNumberInfo.value) {
    phoneNumberInfo = {
      value: '',
      isError: true,
      errorMsg: ERROR_MESSAGE.BLANK,
    };
  } else if (!PHONE_NUMBER_REGEX.test(phoneNumberInfo.value)) {
    phoneNumberInfo.isError = true;
    phoneNumberInfo.errorMsg = ERROR_MESSAGE.INVALID_FORMAT;
  } else {
    phoneNumberInfo.isError = false;
    phoneNumberInfo.errorMsg = '';
  }

  return phoneNumberInfo;
};
