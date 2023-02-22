import { configureStore } from '@reduxjs/toolkit';
import { recipesAPISlice } from '@/slices/recipesSlice';

const store = configureStore({
    reducer: {
        [recipesAPISlice.reducerPath]: recipesAPISlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesAPISlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
