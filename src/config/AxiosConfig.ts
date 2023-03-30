import Axios from 'axios';

export const baseURL = import.meta.env.VITE_PODCASTER_URL;
const allOriginsPath = import.meta.env.VITE_ALL_ORIGINS_URL;

export const allOrigins = (path: string) => {
  return `${allOriginsPath}/get?url=${encodeURIComponent(path)}`;
};

export const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
