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
  productCode: string;
  description: string;
  category: string;
  image: ProductPhoto;
  categoryImage: ProductPhoto;
  isNew: boolean;

  //detail page only
  features?: string;
  price?: number;
  includes?: ProductAccessory[];
  gallery?: ProductPhoto[];
  relatedProducts?: RelatedProducts[];
}

export interface InfoObject {
  value: string;
  isError: boolean;
  errorMsg?: string;
}

export const isInfoObject = (object: any) => {
  return object.value;
};

export interface CheckoutFormInfo {
  name?: InfoObject;
  email?: InfoObject;
  phoneNumber?: InfoObject;
  address?: InfoObject;
  zipCode?: InfoObject;
  city?: InfoObject;
  country?: InfoObject;
  paymentMethod?: InfoObject;
  //temporary
  eMoneyNumber?: InfoObject;
  eMoneyPin?: InfoObject;
}

export interface CartItem {
  id: string | number;
  productId: string;
  productCode: string;
  thumbnail: string;
  price: number;
  quantity: number;
}
