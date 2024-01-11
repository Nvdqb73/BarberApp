import * as httpRequest from '~/utils/httpRequest';

export const getService = async () => {
    const res = await httpRequest.get('Service');
    return res.data;
};

export const getServiceId = async ({ id }) => {
    const res = await httpRequest.get(`Service/${id}`);
    return res.data;
};
