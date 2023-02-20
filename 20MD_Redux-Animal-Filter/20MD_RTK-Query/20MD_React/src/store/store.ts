import { configureStore } from '@reduxjs/toolkit';

import { animalAPISlice } from './animalAPISlice';

const store = configureStore({
    reducer: {
        [animalAPISlice.reducerPath]: animalAPISlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animalAPISlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
