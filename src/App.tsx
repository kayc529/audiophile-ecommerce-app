import ComponentsDemoPage from './pages/ComponentsDemoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import EarphonesPage from './pages/EarphonesPage';
import HeadphonesPage from './pages/HeadphonesPage';
import SpeakersPage from './pages/SpeakersPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import Modal from 'react-modal';
import { ModalShade } from './components/common';
import { useEffect } from 'react';
import {
  revealAnimatedElements,
  setAnimations,
} from './utils/scrollingAnimation';

Modal.setAppElement('#root');

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', setAnimations);
    return () => {
      window.removeEventListener('scroll', setAnimations);
    };
  }, []);

  setAnimations();

  return (
    <>
      <ModalShade />
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/earphones' element={<EarphonesPage />} />
            <Route path='/headphones' element={<HeadphonesPage />} />
            <Route path='/speakers' element={<SpeakersPage />} />
            <Route path='/product/:productId' element={<ProductDetailPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/demo' element={<ComponentsDemoPage />} />
          </Route>
          <Route path='/demo2' element={<ComponentsDemoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
