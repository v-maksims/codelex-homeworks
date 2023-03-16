import { configureStore } from '@reduxjs/toolkit';

import instrumentsReducer from './instrumentsSlice';

const store = configureStore({
    reducer: {
        instruments: instrumentsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
