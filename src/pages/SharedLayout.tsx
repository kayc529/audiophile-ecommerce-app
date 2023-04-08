import { Outlet, useLocation } from 'react-router-dom';
import { Footer, HeaderContainer } from '../components/common';
import { useEffect } from 'react';
import { scrollToTop } from '../utils/scrollHelper';

const SharedLayout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <main className='w-full flex flex-col items-center'>
      <HeaderContainer />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
