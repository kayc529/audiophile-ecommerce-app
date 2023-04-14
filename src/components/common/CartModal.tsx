import CartModalItem from './CartModalItem';
import PrimaryButton from './PrimaryButton';
import PricingRow from './PricingRow';
import { calculateTotalAmount } from '../../utils/checkoutAmountHelper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeAllModals } from '../../features/modal/modalSlice';
import EmptyCart from './EmptyCart';
import { removeAllCartItems } from '../../features/user/userSlice';

export default function CartModal() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.user);

  const goToCheckoutPage = () => {
    dispatch(closeAllModals());
    navigate('/checkout');
  };

  const removeAll = () => {
    dispatch(removeAllCartItems());
  };

  return (
    <aside className='w-mainContentMobile px-7 py-8 bg-white rounded-lg flex flex-col space-y-8 md:w-cartModal md:px-8'>
      <div className='flex justify-between items-center'>
        <h6 className='uppercase text-h6 tracking-h6 font-bold'>
          cart ({cartItems.length})
        </h6>
        {cartItems.length > 0 && (
          <button
            className='underline w-max h-max text-lg tracking-lg opacity-50'
            onClick={removeAll}
          >
            Remove all
          </button>
        )}
      </div>

      {cartItems.length > 0 ? (
        <>
          <ul className='flex flex-col space-y-6'>
            {cartItems.map((cartItem) => {
              return (
                <CartModalItem key={cartItem.productId} cartItem={cartItem} />
              );
            })}
          </ul>
          <div className='flex flex-col space-y-6'>
            <PricingRow
              title='total'
              amount={calculateTotalAmount(cartItems)}
            />
            <PrimaryButton
              text='checkout'
              fullSize={true}
              onButtonClick={goToCheckoutPage}
            />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </aside>
  );
}
