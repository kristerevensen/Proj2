import axios from 'axios';
import { Router } from 'react-router-dom';

const axiosClient = axios.create({

    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        'Access-Control-Allow-Credentials': 'true',

    },
    withCredentials: true,
});

axiosClient.interceptors.response.use(
    (config) => {
       const token = "1234"; //TODO: get token from somewhere
       config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
);

axiosClient.interceptors.response.use(response => {
        return response;
    },
    error => {
        if(error.response && error.response.status === 401) {
            Router.navigate('/login');
            //console.log("Unauthorized");
            return error;
        }
        throw error;
    }
);


export default axiosClient;
