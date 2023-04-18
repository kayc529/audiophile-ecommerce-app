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

export interface FormInfo {}
export interface CheckoutFormInfo extends FormInfo {
  name?: InfoObject;
  email?: InfoObject;
  phoneNumber?: InfoObject;
  suite?: InfoObject;
  street?: InfoObject;
  city?: InfoObject;
  state?: InfoObject;
  postalCode?: InfoObject;
  country?: InfoObject;
  paymentMethod?: InfoObject;
  eMoneyNumber?: InfoObject;
  eMoneyPin?: InfoObject;
}

export interface LoginRegisterFormInfo extends FormInfo {
  email?: InfoObject;
  password?: InfoObject;
  retypePassword?: InfoObject;
  firstName?: InfoObject;
  lastName?: InfoObject;
}

export interface AccountInfoFormInfo extends FormInfo {
  firstName?: InfoObject;
  lastName?: InfoObject;
  newEmail?: InfoObject;
  retypeEmail?: InfoObject;
  currentPassword?: InfoObject;
  newPassword?: InfoObject;
  retypePassword?: InfoObject;
}

export interface CartItem {
  id: string | number;
  productId: string;
  productCode: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

export interface Address {
  attn: string;
  unit?: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: Address;
  role: string;
}

export interface Order {
  id: string;
  status: string;
  items: CartItem[];
  grandTotal: number;
  subtotal: number;
  tax: number;
  shipping: number;
  shippingAddress: Address;
  paymentMethod: string;
  cardNumber?: string;
  createdAt: string;
  shippedAt?: string;
}
