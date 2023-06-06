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

export interface AddressFormInfo extends FormInfo {
  name?: InfoObject;
  unit?: InfoObject;
  street?: InfoObject;
  city?: InfoObject;
  state?: InfoObject;
  postalCode?: InfoObject;
  country?: InfoObject;
  phoneNumber?: InfoObject;
}
export interface CheckoutFormInfo extends AddressFormInfo {
  email?: InfoObject;
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
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  isDefault?: boolean;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  defaultAddress?: Address;
  addresses?: Address[];
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

export interface ResponseError {
  msg: string;
}

export interface RegisterUser {
  firstName: string | undefined;
  lastName: string | undefined;
  password: string | undefined;
  email: string | undefined;
}

export interface LoginCredentials {
  email: string | undefined;
  password: string | undefined;
}
