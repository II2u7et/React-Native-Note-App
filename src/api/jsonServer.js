import axios from 'axios';

export default axios.create({
    baseURL: 'http://2ec7b737784f.ngrok.io'
});

//base URL need to be changed every 8hrs