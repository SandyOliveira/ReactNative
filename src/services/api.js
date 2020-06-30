import axios from 'axios';


// nesse baseUrl use uma api que foi feito deploy nela.
const api = axios.create({
    baseURL: 'https:rocketseat-node.herokuapp.com/api'
});
export default api;