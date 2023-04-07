import { Outlet } from 'react-router-dom';
import { Footer, Header, HeaderContainer } from '../components/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SharedLayout = () => {
  const { isMenuOpened } = useSelector((state: RootState) => state.user);

  return (
    <main className='w-full flex flex-col items-center'>
      <HeaderContainer />
      {isMenuOpened ? (
        <></>
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </main>
  );
};

export default SharedLayout;
