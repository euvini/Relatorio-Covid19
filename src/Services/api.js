import axios from "axios";

const api = axios.create({
    baseURL: 'http://brasil.io/api',
})

export default api;