const axios = require('axios')

const Axios = axios.create({
    baseURL: `https://newsapi.org/v2`
});

module.exports = Axios
