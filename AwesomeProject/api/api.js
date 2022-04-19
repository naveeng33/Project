/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import axios from 'axios';

export default axios.create({
    // baseURL:'https://agriculture-api.herokuapp.com',
    baseURL:'http://10.0.2.2:5000',
    headers: { 'Content-Type': 'multipart/form-data' },
})