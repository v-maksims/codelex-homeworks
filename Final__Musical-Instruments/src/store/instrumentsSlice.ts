import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInstrumentsState = {
    volume: number,
    isAutoPlay: boolean,
}

const initialState: TInstrumentsState = {
    volume: 100,
    isAutoPlay: false,
};

export const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState,
    reducers: {
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        setAutoPlay: (state, action: PayloadAction<boolean>) => {
            state.isAutoPlay = action.payload;
        },
    },
});

export const {
    setVolume, setAutoPlay,
} = instrumentsSlice.actions;

export default instrumentsSlice.reducer;
