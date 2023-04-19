import React, { useState } from 'react';
import AccountInfoRow from '../components/account/AccountInfoRow';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  FormTextField,
  PrimaryButton,
  SecondaryButton,
} from '../components/common';
import { AccountInfoFormInfo } from '../utils/interface';

export default function AccountInfoPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const [edittingField, setEdittingField] = useState<string | undefined>(
    undefined
  );
  const [input, setInput] = useState<AccountInfoFormInfo>({});

  const onToggleEdit = (
    edittingFieldName: string,
    e?: React.MouseEvent<HTMLElement>
  ) => {
    e?.preventDefault();

    if (!edittingFieldName) {
      setEdittingField(undefined);
      return;
    }

    if (edittingFieldName === edittingField) {
      setEdittingField(undefined);
    } else {
      setEdittingField(edittingFieldName);
    }

    //clear the previous input to prevent unwanted updates
    setInput({});
  };

  const onInputChange = (newInput: AccountInfoFormInfo) => {
    let temp = { ...input, ...newInput };
    setInput(temp);
  };

  const updateAccountInfo = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();

    if (!isInputValid()) {
      return;
    }

    //update user info api
  };

  const isInputValid = (): boolean => {
    if (edittingField === 'name') {
      //check firstname and lastname
    } else if (edittingField === 'email') {
      //check email and retype email
    } else if (edittingField === 'password') {
      //check current password, new password and retype password
    }

    return false;
  };

  return (
    <article className='w-full md:pl-10'>
      <h2 className='pb-10 text-h3 leading-h3 tracking-h3 font-bold'>
        Account Information
      </h2>
      <ul className='w-full flex flex-col lg:w-150'>
        {/* Name */}
        <AccountInfoRow
          onToggleEdit={onToggleEdit}
          name='name'
          isEditting={edittingField === 'name'}
          originalInfo={user.firstName + ' ' + user.lastName}
        >
          <form className='flex flex-col'>
            <FormTextField
              name='firstName'
              placeholder='First Name'
              value={input.firstName?.value}
              isError={input.firstName?.isError}
              errorMsg={input.firstName?.errorMsg}
              onInputChange={onInputChange}
            />
            <FormTextField
              name='lastName'
              placeholder='Last Name'
              value={input.lastName?.value}
              isError={input.lastName?.isError}
              errorMsg={input.lastName?.errorMsg}
              onInputChange={onInputChange}
            />
            <div className='pt-6 flex space-x-4'>
              <SecondaryButton
                text='Cancel'
                onButtonClick={(e) => onToggleEdit('name', e)}
              />
              <PrimaryButton text='Update' onButtonClick={updateAccountInfo} />
            </div>
          </form>
        </AccountInfoRow>

        {/* Email */}
        <AccountInfoRow
          name='email'
          originalInfo={user.email}
          isEditting={edittingField === 'email'}
          onToggleEdit={onToggleEdit}
        >
          <form className='flex flex-col'>
            <FormTextField
              name='newEmail'
              placeholder='Email'
              value={input.newEmail?.value}
              isError={input.newEmail?.isError}
              errorMsg={input.newEmail?.errorMsg}
              onInputChange={onInputChange}
            />
            <FormTextField
              name='retypeEmail'
              placeholder='Confirm Email'
              value={input.retypeEmail?.value}
              isError={input.retypeEmail?.isError}
              errorMsg={input.retypeEmail?.errorMsg}
              onInputChange={onInputChange}
            />
            <div className='pt-6 flex space-x-4'>
              <SecondaryButton
                text='Cancel'
                onButtonClick={(e) => onToggleEdit('email', e)}
              />
              <PrimaryButton text='Update' onButtonClick={updateAccountInfo} />
            </div>
          </form>
        </AccountInfoRow>

        {/* Password */}
        <AccountInfoRow
          name='password'
          originalInfo='******'
          isEditting={edittingField === 'password'}
          onToggleEdit={onToggleEdit}
        >
          <form className='flex flex-col'>
            <FormTextField
              name='currentPassword'
              placeholder='Current Password'
              value={input.currentPassword?.value}
              isError={input.currentPassword?.isError}
              errorMsg={input.currentPassword?.errorMsg}
              onInputChange={onInputChange}
            />
            <FormTextField
              name='newPassword'
              placeholder='New Password'
              value={input.newPassword?.value}
              isError={input.newPassword?.isError}
              errorMsg={input.newPassword?.errorMsg}
              onInputChange={onInputChange}
            />
            <FormTextField
              name='retypePassword'
              placeholder='Confirm Password'
              value={input.retypePassword?.value}
              isError={input.retypePassword?.isError}
              errorMsg={input.retypePassword?.errorMsg}
              onInputChange={onInputChange}
            />
            <div className='pt-6 flex space-x-4'>
              <SecondaryButton
                text='Cancel'
                onButtonClick={(e) => onToggleEdit('password', e)}
              />
              <PrimaryButton text='Update' onButtonClick={updateAccountInfo} />
            </div>
          </form>
        </AccountInfoRow>
      </ul>
    </article>
  );
}
