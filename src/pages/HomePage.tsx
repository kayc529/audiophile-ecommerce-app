import { AboutCompany } from '../components/common';
import Hero from '../components/home/Hero';
import HighlightedProducts from '../components/home/HighlightedProducts';
import { ProductCategories } from '../components/common';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { toggleTopMenu } from '../features/user/userSlice';

export default function HomePage() {
  const { isMenuOpened } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    console.log('wow');

    return () => {
      if (isMenuOpened) {
        console.log('haha');
        dispatch(toggleTopMenu());
      }
    };
  }, []);

  return (
    <div className='w-full pb-footerSpaceMobile flex flex-col md:pb-footerSpaceTablet lg:pb-footerSpace'>
      <Hero />
      <section className='w-full pt-10 px-4 flex flex-col items-center space-y-[120px] md:pt-[96px] md:space-y-[96px] lg:pt-30 lg:space-y-[168px]'>
        <ProductCategories />
        <HighlightedProducts />
        <AboutCompany />
      </section>
    </div>
  );
}
