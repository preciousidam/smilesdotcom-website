import useSWR from 'swr';
import client from './api';

export const getData = async (...args) => {
    const {data, status} = await client.get(...args);
    
    return {data, status};
}


