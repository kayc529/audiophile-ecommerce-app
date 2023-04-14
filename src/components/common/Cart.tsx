import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  onCartClicked?: () => void;
}

export default function Cart({ onCartClicked }: Props) {
  const { cartItems } = useSelector((state: RootState) => state.user);

  const cartClicked = () => {
    if (onCartClicked) {
      onCartClicked();
    }
  };

  return (
    <div
      className='relative flex justify-end cursor-pointer'
      onClick={cartClicked}
    >
      {cartItems.length > 0 && (
        <div className='absolute -top-3 -right-3 w-5 h-5 bg-darkOrange rounded-full flex justify-center items-center'>
          <p className='text-xs text-white'>{cartItems.length}</p>
        </div>
      )}

      <img src='/assets/shared/desktop/icon-cart.svg' alt='cart' />
    </div>
  );
}
