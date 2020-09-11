import axios from 'axios';

const KEY = 'AIzaSyCcgdzZsd2bXO3ra0vMOmjfiUkCtERAB9s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});