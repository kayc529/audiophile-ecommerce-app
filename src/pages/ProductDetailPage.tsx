import ProductDetailsSharedLayout from '../components/product-details/ProductDetailsSharedLayout';
import { productDetailsData } from '../data/product-details-data';

export default function ProductDetailPage() {
  return <ProductDetailsSharedLayout product={productDetailsData[0]} />;
}
