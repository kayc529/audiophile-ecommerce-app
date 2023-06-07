import { AccountInfoFormInfo, UpdateUserInfo } from './interface';

export const convertAccountInfoToUpdateUserInfoObject = (
  accountInfo: AccountInfoFormInfo
): UpdateUserInfo => {
  const entries = Object.entries(accountInfo);
  let returnObj: any = {};

  entries.forEach((entry) => {
    returnObj[entry[0]] = entry[1].value;
  });

  return returnObj;
};
