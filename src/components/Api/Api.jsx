import axios from 'axios';

export const fetch = async () => {
  return await axios
    .get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5de89cce8bcc34944ff28c11b67161cb'
    )
    .then(responce => responce.data.results);
};

export const fetchSearch = async query => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=5de89cce8bcc34944ff28c11b67161cb&query=${query}`
    )
    .then(responce => responce.data.results);
};
