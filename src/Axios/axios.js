import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "https://qa-fs.regurcalls.vip/api",
    baseURL: "http://localhost:3256/api/v1/",
    headers: {
        "Content-Type": "application/json",
        
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const useAxios=()=>axiosInstance

