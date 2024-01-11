import * as httpRequest from '~/utils/httpRequest';

export const getBooking = async () => {
    const res = await httpRequest.get('Booking');
    return res.data;
};

export const postBooking = async ({ dateFounded, startTime, note, startDate = new Date() }) => {
    const res = await httpRequest.post('Booking', {
        startDate,
        dateFounded,
        startTime,
        endTime: '00:00:00',
        note,
        customerID: 1,
    });
    return res.data;
};

export const updateBooking = async ({ id, name, price, groupName }) => {
    const res = await httpRequest.post('Booking', {
        id,
        name,
        price,
        groupName,
    });
    return res.data;
};

export const deleteBooking = async ({ Id }) => {
    const res = await httpRequest.post(`Booking?Id=${Id}`);

    return res.data;
};
