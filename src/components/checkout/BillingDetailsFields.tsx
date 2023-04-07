import { CheckoutFormInfo } from '../../utils/interface';
import { FormTextField } from '../common';

interface Props {
  info?: CheckoutFormInfo;
  onInfoChange?: (newInfo: CheckoutFormInfo) => void;
}

export default function BillingDetailsFields({ info, onInfoChange }: Props) {
  return (
    <div className='grid gap-y-6 md:grid-rows-2 md:grid-cols-2 md:gap-x-4'>
      <FormTextField
        title='name'
        name='name'
        value={info?.name?.value}
        placeholder='John Doe'
        onInputChange={onInfoChange}
      />
      <FormTextField
        title='email address'
        name='email'
        value={info?.email?.value}
        placeholder='johndoe@gmail.com'
        onInputChange={onInfoChange}
      />
      <FormTextField
        title='phone number'
        name='phoneNumber'
        value={info?.phoneNumber?.value}
        placeholder='+1 123-456-7890'
        onInputChange={onInfoChange}
      />
    </div>
  );
}
