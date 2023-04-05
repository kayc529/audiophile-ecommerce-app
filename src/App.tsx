import ComponentsDemoPage from './pages/ComponentsDemoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import EarphonesPage from './pages/EarphonesPage';
import HeadphonesPage from './pages/HeadphonesPage';
import SpeakersPage from './pages/SpeakersPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/earphones' element={<EarphonesPage />} />
          <Route path='/headphones' element={<HeadphonesPage />} />
          <Route path='/speakers' element={<SpeakersPage />} />
          <Route path='/product/:productId' element={<ProductDetailPage />} />
          <Route path='/demo' element={<ComponentsDemoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
