import axios from 'axios';

const API_KEY = '84acf63cced10e4fb48b321130e5907f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

const fetchMovies = async searchQuery => {
  const response = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return response.data;
};

const fetchMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export {
  fetchTrending,
  fetchMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
};
