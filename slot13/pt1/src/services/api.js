import axios from 'axios';

const API_URL = 'http://localhost:9999';

export const getAccounts = async () => {
    const response = await axios.get(`${API_URL}/accounts`);
    return response.data;
};

export const updateAccountStatus = async (id, status) => {
    const response = await axios.patch(`${API_URL}/accounts/${id}`, { status });
    return response.data;
};