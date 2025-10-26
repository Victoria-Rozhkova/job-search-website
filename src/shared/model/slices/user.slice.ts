import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

const initialState = {
  user: null,
};

type InitialStateType = { user: User | null };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state: InitialStateType, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
