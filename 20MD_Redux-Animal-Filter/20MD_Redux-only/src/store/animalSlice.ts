import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAnimal = {
    image: string;
    name: string;
    spec: string;
}

type TAnimalState = {
    allAnimal: TAnimal[];
    species: string[];
    sortedAnimals: TAnimal[]
}

const initialState: TAnimalState = {
    allAnimal: [],
    species: [],
    sortedAnimals: [],
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
        sortBySpecies: (state, action: PayloadAction<string>) => {
            if (action.payload !== 'all') {
                const filtred = state.allAnimal.filter(({ spec }) => spec === action.payload);
                state.sortedAnimals = filtred;
            } else {
                state.sortedAnimals = state.allAnimal;
            }
        },
    },
});

export const { addNewAnimal, addNewSpecies, sortBySpecies } = animalSlice.actions;

export default animalSlice.reducer;
