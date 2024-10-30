import { useMutation, useQuery } from '@tanstack/react-query';
import api, { endpoints } from '@/utils/api';
import {
  JoinTeamResponseI,
  CreateTeamResponseI,
  JoinTeamPayload,
  CreateTeamPayload,
  TeamStatusResponseI,
  ValidationErrorResponse,
  BaseErrorResponse
} from '@/types';
import { AxiosError } from 'axios';
import { showValidationErrors, isValidationError, showErrorMessage } from '@/utils/snackbar';
import { useSnackbar } from 'notistack';

export function useCreateTeam() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: ['create'],
    mutationFn: async (payload: CreateTeamPayload) => {
      const { data } = await api.post<CreateTeamResponseI>(endpoints.registration.createTeam, {
        ...payload
      });
      return data;
    },
    onError: (error: AxiosError<ValidationErrorResponse>) => {
      const errorResponse = error.response?.data;

      if (errorResponse?.errors) {
        showValidationErrors(errorResponse.errors, enqueueSnackbar);
      } else {
        showErrorMessage(
          errorResponse?.message || 'An error occurred while creating the team',
          enqueueSnackbar
        );
      }
    }
  });
}

export function useJoinTeam() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: ['join'],
    mutationFn: async (payload: JoinTeamPayload) => {
      const { data } = await api.post<JoinTeamResponseI>(endpoints.registration.joinTeam, {
        ...payload
      });
      return data;
    },
    // had to put any due to too many differing cases
    onError: (error: AxiosError<any>) => {
      const errorResponse = error.response?.data;
      const status = error.response?.status;

      switch (status) {
        case 401:
          // Team code doesnt exist
          enqueueSnackbar(errorResponse?.message, {
            variant: 'error'
          });
          break;

        case 400:
          if (errorResponse?.message && !isValidationError(errorResponse)) {
            // Team is full
            showErrorMessage(errorResponse.message, enqueueSnackbar);
          } else if (isValidationError(errorResponse)) {
            // validation error
            showValidationErrors(errorResponse?.errors, enqueueSnackbar);
          }
          break;

        default:
          showErrorMessage('An error occurred while joining the team', enqueueSnackbar);
      }
    }
  });
}

export function useGetTeamStatus(id: string, enabled: boolean) {
  return useQuery<
    TeamStatusResponseI,
    AxiosError<BaseErrorResponse>
  >({
    queryKey: ['team', { id }],
    queryFn: async () => {
      const { data } = await api.get<TeamStatusResponseI>(endpoints.teamStatus(id));
      return data;
    },
    retry: 1,
    enabled: !!id && enabled,
    staleTime: 30000,
  });
}
