import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export function useModalState() {
  const { isCartOpen, isHeaderMenuOpen } = useSelector(
    (state: RootState) => state.modal
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let atLeastOneModalOpen = isCartOpen || isHeaderMenuOpen;
    setIsModalOpen(atLeastOneModalOpen);
  }, [isCartOpen, isHeaderMenuOpen]);

  return isModalOpen;
}
