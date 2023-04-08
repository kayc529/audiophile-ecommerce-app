import { AppDispatch, RootState } from '../../store';
import ProductCategories from './ProductCategories';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../features/user/userSlice';
import Modal from 'react-modal';
import Header from './Header';
import { useEffect, useLayoutEffect } from 'react';
import ModalContainer from './ModalContainer';

export default function HeaderContainer() {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpened } = useSelector((state: RootState) => state.user);

  function handleScreenSizeChange() {
    console.log(window.innerWidth);

    if (isMenuOpened) {
      if (window.innerWidth < 768) {
        hideMainBodyScrollbar();
      } else {
        showMainBodyScrollbar();
      }
    } else {
      showMainBodyScrollbar();
    }
  }

  const toggleMenu = () => {
    console.log('toggle Menu');

    dispatch(toggleTopMenu());
  };

  const hideMainBodyScrollbar = () => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.marginRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  };

  const showMainBodyScrollbar = () => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.marginRight = `-${scrollBarWidth}px`;
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='relative w-full flex flex-col'>
      <Header />

      <ModalContainer show={isMenuOpened} hideLg={true} onClose={toggleMenu}>
        <>
          <Header />
          <div className='w-full pt-14 pb-16 bg-white flex justify-center'>
            <ProductCategories />
          </div>
        </>
      </ModalContainer>
    </div>
  );
}
