import {AxiosInstance} from 'axios';
import {axios, baseURL} from '../config/AxiosConfig';

export default class ApiConfig {
  protected path: string;

  protected axios: AxiosInstance;

  constructor(path = baseURL, axiosInstance = axios) {
    this.path = path;
    this.axios = axiosInstance;
  }
}
