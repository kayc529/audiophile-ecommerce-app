import { CheckoutFormInfo } from '../../utils/interface';
import BillingDetails from './BillingDetails';
import PaymentDetails from './PaymentDetails';
import ShippingInfo from './ShippingInfo';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChange?: (newInfo: CheckoutFormInfo) => void;
}

export default function CheckoutForm({ info, onInfoChange }: Props) {
  return (
    <form className='w-2/3 max-w-[730px] px-12 py-12 bg-white rounded-lg space-y-12'>
      <h3 className='uppercase text-h3 leading-h3 tracking-h3 font-bold'>
        checkout
      </h3>
      <BillingDetails info={info} onInfoChange={onInfoChange} />
      <ShippingInfo info={info} onInfoChange={onInfoChange} />
      <PaymentDetails info={info} onInfoChange={onInfoChange} />
    </form>
  );
}
