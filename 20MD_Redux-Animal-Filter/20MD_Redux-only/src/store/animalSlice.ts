import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
type TAnimalState = {

}

// Define the initial state using that type
const initialState: TAnimalState = {

};

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {

    },
});

export const { } = animalSlice.actions;

export default animalSlice.reducer;
