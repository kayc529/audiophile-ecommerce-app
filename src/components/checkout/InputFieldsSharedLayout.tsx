interface Props {
  title: string;
  children?: JSX.Element;
}

export default function InputFieldsSharedLayout({ title, children }: Props) {
  return (
    <fieldset className='w-full flex flex-col'>
      <p className='pb-4 uppercase text-sm leading-sm tracking-sm text-darkOrange font-bold'>
        {title}
      </p>
      {children}
    </fieldset>
  );
}
