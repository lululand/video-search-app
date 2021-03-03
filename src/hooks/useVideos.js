import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

   //default search, happens once on component render
   useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // take the term, do the search, update the state
  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [ videos, search ];
};

export default useVideos;