import * as httpRequest from '~/utils/httpRequest';

export const getRole = async () => {
    try {
        const res = await httpRequest.get('Product/get-product-list', {
            params: {
                GroupName: 'nhom4',
            },
        });
        // console.log('hih', res);

        return res.data;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const getRoleId = async ({ id }) => {
    try {
        const res = await httpRequest.get(`Role/${id}`);
        return res.data;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const postRole = async ({ roleName }) => {
    try {
        const res = await httpRequest.post('Role', {
            roleName,
        });
        return res.data;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const updateRole = async ({ id, roleName }) => {
    try {
        const res = await httpRequest.put(`Role/${id}`, {
            roleName,
        });
        return res.data;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const deleteRole = async ({ id }) => {
    try {
        const res = await httpRequest.deleteId(`Role/${id}`);
        return res.data;
    } catch (error) {
        console.log('error', error.message);
    }
};
