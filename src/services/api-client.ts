import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4d7627c0cd184a25a13c694c7fe2f289'
        // api_key: process.env.REACT_APP_API_KEY
    }

})