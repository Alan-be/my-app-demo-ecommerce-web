import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface DataUserActive {
  email: string;
  user_id: string;
  auth: boolean;
  cart_id?: number;
}

const initialState: DataUserActive = {
  email: '',
  user_id: '',
  auth: false,
  cart_id: 0
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Acción para establecer los datos del usuario
    setUser: (state, action: PayloadAction<{ email: string; user_id: string }>) => {
      state.email = action.payload.email;
      state.user_id = action.payload.user_id;
      state.auth = true; 
    },
    setCartId: (state,action: PayloadAction<{cart_id: number}>) => {
      state.cart_id = action.payload.cart_id
    },

    // Acción para cerrar sesión
    logoutUserRedux: (state) => {
      state.email = '';
      state.user_id = '';
      state.auth = false;
    }
  }
});

export const { setUser, logoutUserRedux,setCartId } = userSlice.actions;

// Selector para obtener los datos del usuario desde el estado global
export const selectUser = (state: RootState) => state.user
export const selectUserId = (state: RootState) => state.user.user_id


export default userSlice.reducer;
