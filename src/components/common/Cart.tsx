import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  //temporary
  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div
      className='relative flex justify-end cursor-pointer'
      onClick={goToCheckout}
    >
      <div className='absolute -top-3 -right-3 w-5 h-5 bg-darkOrange rounded-full flex justify-center items-center'>
        <p className='text-xs text-white'>99</p>
      </div>
      <img src='/assets/shared/desktop/icon-cart.svg' alt='cart' />
    </div>
  );
}
