import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store';

interface Product {
    id: number;
    name: string;
    price: number;
  }

interface CartState {
    shoppingCart: Product[]
}
const initialState: CartState = {
    shoppingCart: []
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addProduct(state,action:any){
            state.shoppingCart.push(action.payload)
        }
    }
})

export const {addProduct} = shoppingCartSlice.actions
export const selectShoppingCart = (state: RootState) => state.shoppingCart.shoppingCart


export default shoppingCartSlice.reducer