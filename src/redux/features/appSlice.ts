// src/redux/features/appSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  selectedProvince: number | undefined;
  selectedRegion: number | undefined;
  selectedDistrict: number | undefined;
  selectedVillage: number | undefined;
  navbarName: string;
}

const initialState: AppState = {
  selectedProvince: undefined,
  selectedRegion: undefined,
  selectedDistrict: undefined,
  selectedVillage: undefined,
  navbarName: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setSelectedProvince (state, action: PayloadAction<number | undefined>) {
      state.selectedProvince = action.payload;
      state.selectedRegion = undefined;
      state.selectedDistrict = undefined;
      state.selectedVillage = undefined;
    },
    setSelectedRegion (state, action: PayloadAction<number | undefined>) {
      state.selectedRegion = action.payload;
      state.selectedDistrict = undefined;
      state.selectedVillage = undefined;
    },
    setSelectedDistrict (state, action: PayloadAction<number | undefined>) {
      state.selectedDistrict = action.payload;
      state.selectedVillage = undefined;
    },
    setSelectedVillage (state, action: PayloadAction<number | undefined>) {
      state.selectedVillage = action.payload;
    },
    setNavbarName (state, action: PayloadAction<string>) {
      state.navbarName = action.payload;
    }
  },
});

export const {
  reset,
  setSelectedProvince,
  setSelectedRegion,
  setSelectedDistrict,
  setSelectedVillage,
  setNavbarName
} = appSlice.actions;
export default appSlice.reducer;
