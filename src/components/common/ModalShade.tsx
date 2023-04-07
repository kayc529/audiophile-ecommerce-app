import React from 'react';
import useModalOpen from '../../hooks/useModalOpen';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Props = {};

export default function ModalShade({}: Props) {
  const { isModalOpen } = useSelector((state: RootState) => state.modal);

  return isModalOpen ? (
    <div className='z-modalBg fixed w-screen h-screen bg-modalShade'></div>
  ) : (
    <></>
  );
}
