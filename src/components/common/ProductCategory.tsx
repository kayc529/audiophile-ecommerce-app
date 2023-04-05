import React from 'react';
import { TertiaryButton } from '.';

interface Props {
  categoryName: string;
  children: JSX.Element;
}

export default function ProductCategory({ categoryName, children }: Props) {
  return (
    <article className='relative w-full h-productCategoryTablet rounded-lg flex flex-col items-center justify-start md:w-1/3 lg:h-productCategory'>
      {children}
      <div className='z-10 absolute bottom-7 flex flex-col items-center'>
        <p className='pb-4 uppercase font-bold text-lg tracking-lg lg:text-h6 lg:tracking-h6'>
          {categoryName}
        </p>
        <TertiaryButton text='shop' />
      </div>
      <div className='absolute bottom-0 w-full h-[165px] bg-mainGrey rounded-lg lg:h-[204px]'></div>
    </article>
  );
}
