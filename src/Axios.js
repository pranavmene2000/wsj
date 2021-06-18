import axios from 'axios';

export const AXIOS = axios

export default axios.create({
    baseURL: `https://wsjnewsapiserver.herokuapp.com`
});
