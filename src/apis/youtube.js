import axios from 'axios';

const KEY = 'AIzaSyBBcN3H-3nAaf6EMyu9-Sx9uu3BGFoqiXE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});