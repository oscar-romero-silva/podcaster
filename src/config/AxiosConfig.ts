import Axios from 'axios';

export const baseURL = 'https://itunes.apple.com/';

export const axios = Axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
