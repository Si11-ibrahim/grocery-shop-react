export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  addresses: Address[];
  defaultAddressId?: string;
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
