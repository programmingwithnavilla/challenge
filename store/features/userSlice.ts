import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/screens";

const intialState: any = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  created: "",
};

const userSlice = createSlice({
  name: "character",
  initialState: {
    characterInfo: intialState,
  },
  reducers: {
    setUser(state: any, action: PayloadAction<IUser>) {
      state.users.unshift(action.payload);
    },
    removeUser(state: any, action: PayloadAction<IUser>) {
      state.users = {
        ...state.users,
        users: state.user.filter((user: any) => user.id !== action.payload.id),
      };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectCharacter = (state: any) => state.character;

export default userSlice.reducer;
