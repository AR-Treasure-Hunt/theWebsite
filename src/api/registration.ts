import { useMutation, useQuery } from '@tanstack/react-query';
import api, { endpoints } from '@/utils/api';
import {
  JoinTeamResponseI,
  CreateTeamResponseI,
  JoinTeamPayload,
  CreateTeamPayload,
  TeamStatusResponseI
} from '@/types';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

export function useCreateTeam() {
  const snackbar = useSnackbar();

  return useMutation({
    mutationKey: ['create'],
    mutationFn: async (payload: CreateTeamPayload) => {
      const { data } = await api.post<CreateTeamResponseI>(endpoints.registration.createTeam, {
        ...payload
      });
      return data;
    },
    onError: (data: any) => {
      snackbar.enqueueSnackbar(data.response?.data.message, { variant: 'error' });
    }
  });
}

export function useJoinTeam() {
  const snackbar = useSnackbar();

  return useMutation({
    mutationKey: ['join'],
    mutationFn: async (payload: JoinTeamPayload) => {
      const { data } = await api.post<JoinTeamResponseI>(endpoints.registration.joinTeam, {
        ...payload
      });
      return data;
    },
    onError: (data: any) => {
      snackbar.enqueueSnackbar(data.response?.data.message, { variant: 'error' });
    }
  });
}

export function useGetTeamStatus(id: string, enabled: boolean) {
  return useQuery<
    TeamStatusResponseI,
    AxiosError<{
      data: string;
      error: string;
      message: string;
    }>
  >({
    queryKey: ['team', { id }],
    queryFn: async () => {
      const { data } = await api.get<TeamStatusResponseI>(endpoints.teamStatus(id));
      return data;
    },
    retry: 1,
    enabled: !!id && enabled
  });
}
