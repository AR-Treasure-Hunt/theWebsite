import axios from 'axios';
import { API_URL } from '../config-global';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const endpoints = {
};

export default api;
