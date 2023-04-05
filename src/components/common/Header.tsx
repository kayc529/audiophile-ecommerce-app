import Cart from './Cart';
import Logo from './Logo';
import Navbar from './Navbar';
import NavbarMenu from './NavbarMenu';

const Header = () => {
  return (
    <header className='w-full h-headerTablet bg-backgroundBlack flex justify-center lg:h-header'>
      <div className='header-columns w-full px-4 items-center border-b border-transparentWhite md:max-w-mainContentTablet lg:max-w-mainContent'>
        <NavbarMenu />
        <div className='justify-self-center md:justify-self-start'>
          <Logo />
        </div>
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
