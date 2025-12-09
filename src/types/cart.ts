import type { Product } from './product';

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface CartSummary {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}
