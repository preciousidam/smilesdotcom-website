import axios from 'axios';
import {apiConfig} from './config';

const client = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: { 
        Accept: 'application/json',
        mode: 'no-cors'
    },
    data:{
        scope: '',
        id: 34,
    }
});

export default client;

function getUrl(config) {
    if (config.baseURL) {
        return config.url.replace(config.baseURL, '');
    } 
    return config.url;
}

// Intercept all requests
client.interceptors.request.use(
    config => {
    return config;
}, error => Promise.reject(error),);

// Intercept all responses
client.interceptors.response.use(
    async response => {
        return response;
    },
    async error => {
        return error?.response
    },
);