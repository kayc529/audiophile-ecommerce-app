import { AppDispatch, RootState } from '../../store';
import ProductCategories from './ProductCategories';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu, toggleCart } from '../../features/user/userSlice';
import Header from './Header';
import ModalContainer from './ModalContainer';
import CartModal from './CartModal';

export default function HeaderContainer() {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpened, isCartOpened } = useSelector(
    (state: RootState) => state.user
  );

  const toggleMenu = () => {
    dispatch(toggleTopMenu());
  };

  const toggleCartModal = () => {
    dispatch(toggleCart());
  };

  return (
    <div className='relative w-full flex flex-col'>
      <Header />
      <ModalContainer
        show={isMenuOpened}
        hideLg={true}
        onClose={toggleMenu}
        centerDialog={false}
      >
        <Header />
        <div className='w-full pt-14 pb-16 bg-white flex justify-center'>
          <ProductCategories />
        </div>
      </ModalContainer>
      <ModalContainer show={isCartOpened} onClose={toggleCartModal}>
        <Header />
        <div className='w-full flex justify-end pt-8 pr-6'>
          <CartModal />
        </div>
      </ModalContainer>
    </div>
  );
}
