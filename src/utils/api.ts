import axios from 'axios';
import { API_URL } from '../config-global';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// TODO: Change the endpoints to the correct endpoint
export const endpoints = {
  decodingDecade: {
    verifyAnswer: '/auth/verify-answer',
    submitTeamName: '/auth/submit-team-name',
    getDecodingDecadeImage: '/auth/get-decoding-decade-image'
  },
  registration: {
    joinTeam: '/u/register/join',
    createTeam: '/u/register/create'
  },
  teamStatus: (id: string) => `/t/team/${id}`
};

export default api;
