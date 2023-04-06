import ProductDetailsSharedLayout from '../components/product-details/ProductDetailsSharedLayout';
import { productDetailsData } from '../data/product-details-data';

export default function ProductDetailPage() {
  //TODO
  //get the productId from url
  //get product data from server

  return <ProductDetailsSharedLayout product={productDetailsData[0]} />;
}
