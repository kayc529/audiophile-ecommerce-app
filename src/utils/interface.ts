export interface ProductAccessory {
  item: string;
  quantity: number;
}

export interface ProductPhoto {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface RelatedProducts {
  productId: string;
  productName: string;
  image: ProductPhoto;
}

export interface Product {
  id: string | number;
  productId: string;
  productName: string;
  description: string;
  category: string;
  image: ProductPhoto;
  isNew: boolean;

  //detail page only
  features?: string;
  price?: number;
  includes?: ProductAccessory[];
  gallery?: ProductPhoto[];
  relatedProducts?: RelatedProducts[];
}
