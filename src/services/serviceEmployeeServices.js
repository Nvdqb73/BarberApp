import * as httpRequest from '~/utils/httpRequest';

export const getServiceEmployee = async () => {
    const res = await httpRequest.get('ServiceEmployee');
    return res.data;
};

export const getServiceEmployeeId = async ({ id }) => {
    const res = await httpRequest.get(`ServiceEmployee/${id}`);
    return res.data;
};
