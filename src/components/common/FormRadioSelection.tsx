interface FormRadioSelectionProps {
  id: string;
  label: string;
  name: string;
  isChecked: boolean;
  onCheckChange: (paymentMethod: string) => void;
}

const FormRadioSelection = ({
  id,
  label,
  name,
  isChecked,
  onCheckChange,
}: FormRadioSelectionProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckChange(e.target.id);
  };

  return (
    <div
      className={`w-textField h-textField px-4 flex items-center space-x-4 rounded-lg border hover:border-mainOrange ${
        isChecked ? 'border-mainOrange' : 'border-mainGrey'
      }`}
    >
      <input
        className='form-radio-btn'
        type='radio'
        name={name}
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id} className='text-md font-bold'>
        {label}
      </label>
    </div>
  );
};

export default FormRadioSelection;
