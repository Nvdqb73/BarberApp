import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceServices from '~/services/serviceServices';
const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        status: 'idle',
        servicesList: [],
        error: null,
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchServices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.servicesList = action?.payload;
                state.status = 'idle';
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action?.payload;
            });
    },
});

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
    const res = await serviceServices.getService();
    return res;
});

export const { reducer, actions } = servicesSlice;
