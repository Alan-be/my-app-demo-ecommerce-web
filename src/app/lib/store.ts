import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from './features/productsSlice/productsSlice'
import shoppingReducer from "@/app/lib/features/shoppingCartSlice/shoppingCartSlice"
import userReducer from "@/app/lib/features/userSlice/userSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer, 
      shoppingCart: shoppingReducer,
      user: userReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']