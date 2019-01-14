import axios from 'axios'; 

const KEY = 'AIzaSyAUP-McGM00E0u3gtWEIs-hu6vcWkb84bY'; 


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY 
    }
});

