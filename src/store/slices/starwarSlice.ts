import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StarwarCharacter {
  id: number;
  name: string;
  address: string;
}

interface StarwarState {
  characters: StarwarCharacter[];
  loading: boolean;
  error: string | null;
}

const initialState: StarwarState = {
  characters: [],
  loading: false,
  error: null,
};

const starwarSlice = createSlice({
  name: "starwar",
  initialState,
  reducers: {
    fetchCharactersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess: (state, action: PayloadAction<StarwarCharacter[]>) => {
      state.loading = false;
      state.characters = [...state.characters, ...action.payload]; 
    },
    
    fetchCharactersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCharacter: (state, action: PayloadAction<StarwarCharacter>) => {
      state.characters.push(action.payload);
    },
  },
});

export const { fetchCharactersRequest, fetchCharactersSuccess, fetchCharactersFailure,addCharacter } =
  starwarSlice.actions;
export default starwarSlice.reducer;
