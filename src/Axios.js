import axios from 'axios';

export const AXIOS = axios

export default axios.create({
    baseURL: `https://newsapi.org/v2`
});
