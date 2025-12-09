import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState, Product } from '@/types';

const loadCartFromStorage = (): CartItem[] => {
  try {
    const saved = localStorage.getItem('saffron-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  localStorage.setItem('saffron-cart', JSON.stringify(items));
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity?: number }>) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          productId: product.id,
          product,
          quantity,
        });
      }
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      saveCartToStorage(state.items);
    },

    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.productId === productId);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.productId !== productId);
        } else {
          item.quantity = quantity;
        }
      }
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
export const selectIsCartOpen = (state: { cart: CartState }) => state.cart.isOpen;

export default cartSlice.reducer;
