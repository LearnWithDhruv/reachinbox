import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://hiring.reachinbox.xyz/api/v1', // Replace with the actual base URL from the Postman documentation
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
