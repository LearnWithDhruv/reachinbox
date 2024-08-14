import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://hiring.reachinbox.xyz/api/v1', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
