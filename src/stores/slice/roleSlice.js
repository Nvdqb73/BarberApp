import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as roleServices from '~/services/roleServices';
const roleSlice = createSlice({
    name: 'role',
    initialState: {
        status: 'idle',
        roles: [],
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchRoles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {
                state.roles = action.payload;
                state.status = 'idle';
            });
    },
});

export const fetchRoles = createAsyncThunk('role/fetchRoles', async () => {
    try {
        const res = await roleServices.getRole();
        if (res) {
            // console.log('res', res);
            return res;
        }
    } catch (error) {
        console.log('error', error.message);
    }
});

export const { reducer, actions } = roleSlice;
