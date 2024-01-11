import { configureStore } from '@reduxjs/toolkit';
import { reducer as bookingServiceReducer } from './slice/bookingServiceSlice';
import { reducer as servicesReducer } from './slice/servicesSlice';
import { reducer as serviceEmployeeReducer } from './slice/serviceEmployeeSlice';
const store = configureStore({
    reducer: {
        services: servicesReducer,
        serviceEmployees: serviceEmployeeReducer,
        bookingServices: bookingServiceReducer,
    },
});

export default store;
