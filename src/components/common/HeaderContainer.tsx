import { AppDispatch, RootState } from '../../store';
import Cart from './Cart';
import Logo from './Logo';
import Navbar from './Navbar';
import NavbarMenu from './NavbarMenu';
import ProductCategories from './ProductCategories';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../features/user/userSlice';
import Modal from 'react-modal';
import Header from './Header';

export default function HeaderContainer() {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpened } = useSelector((state: RootState) => state.user);

  const toggleMenu = () => {
    dispatch(toggleTopMenu());
  };

  return (
    <div className='relative w-full flex flex-col'>
      <Header />
      <Modal
        className='Modal'
        overlayClassName='ModalOverlay'
        isOpen={isMenuOpened}
      >
        <Header />
        <div
          className='w-full h-full overflow-y-scroll pt-14 pb-16 bg-white flex justify-center md:h-auto'
          onClick={toggleMenu}
        >
          <ProductCategories />
        </div>
      </Modal>
    </div>
  );
}
