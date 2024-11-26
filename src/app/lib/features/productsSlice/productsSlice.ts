// features/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define el tipo para un producto
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Define el estado inicial
interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Acción para guardar productos
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

// Exporta las acciones
export const { setProducts } = productsSlice.actions;


export const selectProducts = (state: RootState) => state.products.products
// Exporta el reducer
export default productsSlice.reducer;
