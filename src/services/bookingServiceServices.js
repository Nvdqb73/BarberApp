import * as httpRequest from '~/utils/httpRequest';

export const getBookingService = async () => {
    const res = await httpRequest.get('BookingService');
    return res.data;
};

export const postBookingService = async ({ bookingID, serID, employeeID, startDate = new Date() }) => {
    const res = await httpRequest.post('BookingService', {
        bookingID,
        serID,
        employeeID,
    });
    return res.data;
};

export const updateBookingService = async ({ id, name, price, groupName }) => {
    const res = await httpRequest.post('BookingService', {
        id,
        name,
        price,
        groupName,
    });
    return res.data;
};

export const deleteBookingService = async ({ Id }) => {
    const res = await httpRequest.post(`BookingService?Id=${Id}`);

    return res.data;
};
