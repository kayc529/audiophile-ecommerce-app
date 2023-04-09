import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../features/user/userSlice';

export default function Cart() {
  const dispatch: AppDispatch = useDispatch();

  const toggleCartModal = () => {
    dispatch(toggleCart());
  };

  return (
    <div
      className='relative flex justify-end cursor-pointer'
      onClick={toggleCartModal}
    >
      <div className='absolute -top-3 -right-3 w-5 h-5 bg-darkOrange rounded-full flex justify-center items-center'>
        <p className='text-xs text-white'>99</p>
      </div>
      <img src='/assets/shared/desktop/icon-cart.svg' alt='cart' />
    </div>
  );
}
