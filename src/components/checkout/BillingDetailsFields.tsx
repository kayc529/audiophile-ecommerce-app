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
        placeholder='John Doe'
        value={info?.name?.value}
        isError={info?.name?.isError}
        errorMsg={info?.name?.errorMsg}
        onInputChange={onInfoChange}
      />
      <FormTextField
        title='email address'
        name='email'
        placeholder='johndoe@gmail.com'
        value={info?.email?.value}
        isError={info?.email?.isError}
        errorMsg={info?.email?.errorMsg}
        onInputChange={onInfoChange}
      />
      <FormTextField
        title='phone number'
        name='phoneNumber'
        placeholder='+1 123-456-7890'
        value={info?.phoneNumber?.value}
        isError={info?.phoneNumber?.isError}
        errorMsg={info?.phoneNumber?.errorMsg}
        onInputChange={onInfoChange}
      />
    </div>
  );
}
