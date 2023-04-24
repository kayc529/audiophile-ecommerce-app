import React from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';

interface Props {
  children: JSX.Element;
  name: string;
  originalInfo: string | undefined;
  isEditting?: boolean;
  onToggleEdit: (name: string) => void;
}

export default function AccountInfoRow({
  children,
  name,
  originalInfo,
  isEditting = false,
  onToggleEdit,
}: Props) {
  const toggleEdit = () => {
    onToggleEdit(name);
  };

  return (
    <li className='w-full pt-4 pb-6 flex justify-between border-b-[1px] last:border-transparent'>
      {isEditting ? (
        children
      ) : (
        <>
          <div className='flex'>
            <p className='w-30 capitalize text-lg font-bold'>{name}</p>
            <p className='text-lg '>{originalInfo}</p>
          </div>
          <MdOutlineModeEditOutline className='w-7 h-7' onClick={toggleEdit} />
        </>
      )}
    </li>
  );
}
