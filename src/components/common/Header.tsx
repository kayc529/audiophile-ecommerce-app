import { AppDispatch, RootState } from '../../store';
import Cart from './Cart';
import Logo from './Logo';
import Navbar from './Navbar';
import NavbarMenu from './NavbarMenu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../features/user/userSlice';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpened } = useSelector((state: RootState) => state.user);

  const toggleMenu = () => {
    dispatch(toggleTopMenu());
  };

  const closeMenu = () => {
    if (isMenuOpened) {
      dispatch(toggleTopMenu());
    }
  };

  return (
    <header
      className={`relative w-full h-headerTablet bg-backgroundBlack flex justify-center lg:h-header`}
    >
      <div className='header-columns w-full px-4 items-center border-b border-transparentWhite md:max-w-mainContentTablet lg:max-w-mainContent'>
        <NavbarMenu onMenuClick={toggleMenu} />
        <div
          className='justify-self-center md:justify-self-start'
          onClick={closeMenu}
        >
          <Logo />
        </div>
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        <div onClick={closeMenu}>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
