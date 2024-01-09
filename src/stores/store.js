import { configureStore } from '@reduxjs/toolkit';
import { reducer as roleReducer } from './slice/roleSlice';

const store = configureStore({
    reducer: {
        roles: roleReducer,
    },
});

export default store;
