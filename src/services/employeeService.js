import * as httpRequest from '~/utils/httpRequest';

export const getEmployee = async () => {
    const res = await httpRequest.get('Employee');
    return res.data;
};

export const getEmployeeId = async (id) => {
    const res = await httpRequest.get(`Employee/${id}`);
    return res.data;
};
