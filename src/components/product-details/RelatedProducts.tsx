import React from 'react';
import { RelatedProducts as IRelatedProduct } from '../../utils/interface';
import RelatedProduct from './RelatedProduct';

interface Props {
  relatedProducts: IRelatedProduct[] | undefined;
}

export default function RelatedProducts({ relatedProducts }: Props) {
  return (
    <article className='w-full flex flex-col items-center'>
      <h3 className='pb-16 uppercase text-h3 leading-3 tracking-h3 font-bold'>
        you may also like
      </h3>
      <ul className='w-full flex flex-col space-y-14 md:space-y-0 md:space-x-[11px] md:flex-row lg:space-x-[30px]'>
        {relatedProducts?.map((product) => {
          return <RelatedProduct key={product.productId} product={product} />;
        })}
      </ul>
    </article>
  );
}
