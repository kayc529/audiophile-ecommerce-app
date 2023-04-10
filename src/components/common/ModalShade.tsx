import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { closeAllModals } from '../../features/modal/modalSlice';
import { useModalState } from '../../hooks/useModalState';

export default function ModalShade() {
  const dispatch: AppDispatch = useDispatch();
  const isModalOpen = useModalState();

  const closeModal = () => {
    dispatch(closeAllModals());
  };

  return isModalOpen ? (
    <div
      className='z-modalBg fixed w-full h-full bg-modalShade'
      onClick={closeModal}
    ></div>
  ) : (
    <></>
  );
}
