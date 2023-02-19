import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAnimal = {
    image: string;
    name: string;
    spec: string;
}

type TAnimalState = {
    allAnimal: TAnimal[];
    species: string[];
}

const initialState: TAnimalState = {
    allAnimal: [],
    species: [],
};

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        addNewAnimal: (state, action: PayloadAction<TAnimal>) => {
            state.allAnimal.push(action.payload);
        },
        addNewSpecies: (state, action: PayloadAction<string>) => {
            state.species.push(action.payload);
        },
    },
});

export const { addNewAnimal, addNewSpecies } = animalSlice.actions;

export default animalSlice.reducer;
