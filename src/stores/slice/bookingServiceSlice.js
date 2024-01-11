import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const bookingServiceSlice = createSlice({
    name: 'bookingService',
    initialState: {
        books: [],
        total: 0,
        time: '00:00:00',
    },
    reducers: {
        addBookingService: (state, action) => {
            state.books?.push(action?.payload);
            state.total += action?.payload?.serPrice;
            state.time = moment(state.time, 'HH:mm:ss');
            state.time = moment
                .utc(state.time, 'HH:mm:ss')
                .add(moment.duration(action.payload.serTime, 'minutes'))
                .format('HH:mm:ss');
        },
        removeBookingService: (state, action) => {
            const currentService = state.books.find((book, index) => index !== action?.payload);
            state.total -= currentService?.serPrice;
            state.time = moment(state.time, 'HH:mm:ss');
            state.time = moment
                .utc(state.time, 'HH:mm:ss')
                .subtract(moment.duration(action.payload.serTime, 'minutes'))
                .format('HH:mm:ss');
            state.books = state.books.filter((book, index) => index !== action?.payload);
        },
    },
});

export const { reducer, actions } = bookingServiceSlice;
