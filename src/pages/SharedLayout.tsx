import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/common';

const SharedLayout = () => {
  return (
    <main className='w-full flex flex-col items-center'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
