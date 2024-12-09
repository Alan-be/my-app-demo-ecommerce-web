import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CartItem {
  product_id: string;
  quantity: number;
}

interface ShoppingCart {
  id: number; 
  customer_id?: string | null; 
  items_cart: CartItem[];
}
interface CartState {
  activeCart: ShoppingCart | null;
}

const initialState: CartState = {
  activeCart: null, 
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setActiveCart(state, action: PayloadAction<{ customer_id?: string,id?: number }>) {
      if (!state.activeCart) {
        state.activeCart = {
          id: action.payload.id ?? Date.now(),
          customer_id: action.payload.customer_id ?? null,
          items_cart: [],
        };
      } else if (state.activeCart.customer_id !== action.payload.customer_id) {

        state.activeCart = {
          id:  action.payload.id ?? Date.now(),
          customer_id: action.payload.customer_id ?? null,
          items_cart: [],
        };
      }
    },
    addProductToActiveCart(state, action: PayloadAction<CartItem>) {
      if (!state.activeCart) {
        throw new Error('No hay un carrito activo. Crea uno primero.');
      }
      const { product_id, quantity } = action.payload;
      const existingProduct = state.activeCart.items_cart.find(
        (item) => item.product_id === product_id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity; 
      } else {
        state.activeCart.items_cart.push(action.payload);
      }
    },
    clearActiveCart(state) {
      if (state.activeCart) {
        state.activeCart.items_cart = [];
      }
    },
  },
});


export const { setActiveCart, addProductToActiveCart, clearActiveCart } =
  shoppingCartSlice.actions;

export const selectActiveCart = (state: RootState) => state.shoppingCart.activeCart?.items_cart;

export const selectCart = (state: RootState) => state.shoppingCart.activeCart

export default shoppingCartSlice.reducer;
