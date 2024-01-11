import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://rightsageleaf87.conveyor.cloud/api/',
});

export const get = async (path, options = {}) => {
    try {
        const response = await httpRequest.get(path, options);
        return response;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const post = async (path, options = {}) => {
    try {
        const response = await httpRequest.post(path, options);
        return response;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const put = async (path, options = {}) => {
    try {
        const response = await httpRequest.put(path, options);
        return response;
    } catch (error) {
        console.log('error', error.message);
    }
};

export const deleteId = async (path) => {
    try {
        const response = await httpRequest.delete(path);
        return response;
    } catch (error) {
        console.log('error', error.message);
    }
};

export default httpRequest;
