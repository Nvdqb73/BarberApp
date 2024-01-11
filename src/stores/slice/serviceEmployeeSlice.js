import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceEmployeeServices from '~/services/serviceEmployeeServices';
const serviceEmployeeSlice = createSlice({
    name: 'serviceEmployee',
    initialState: {
        status: 'idle',
        serviceEmployeeList: [],
        error: null,
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchServiceEmployee.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServiceEmployee.fulfilled, (state, action) => {
                state.serviceEmployeeList = action?.payload;
                state.status = 'idle';
            })
            .addCase(fetchServiceEmployee.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action?.payload;
            });
    },
});

export const fetchServiceEmployee = createAsyncThunk('serviceEmployee/fetchServiceEmployee', async () => {
    const res = await serviceEmployeeServices.getServiceEmployee();
    return res;
});

export const { reducer, actions } = serviceEmployeeSlice;
