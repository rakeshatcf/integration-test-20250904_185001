import axios from 'axios';
import type { CreateTeamDto, Team } from '@shared/types';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createTeam = async (data: CreateTeamDto): Promise<Team> => {
  const response = await api.post<Team>('/teams', data);
  return response.data;
};

export const getTeams = async (): Promise<Team[]> => {
  const response = await api.get<Team[]>('/teams');
  return response.data;
};