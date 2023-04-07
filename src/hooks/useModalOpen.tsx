import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
export default function useModalOpen() {
  const { isMenuOpened } = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(isMenuOpened);

  useEffect(() => {
    setIsOpen(isMenuOpened);
  }, [isMenuOpened]);

  return isOpen;
}
