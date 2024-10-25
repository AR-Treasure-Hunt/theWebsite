import { useMutation, useQuery } from '@tanstack/react-query';
import api, { endpoints } from '@/utils/api';
import { DecodingDecadeImageResponse, DecodingDecadeResponse } from '@/types';

export function useSubmitAnswer() {
  return useMutation<DecodingDecadeResponse, Error, string>({
    mutationKey: ['submitAnswer'],
    mutationFn: async (answer: string) => {
      const { data } = await api.post<DecodingDecadeResponse>(
        endpoints.decodingDecade.verifyAnswer,
        { answer }
      );
      return data;
    },
  });
}

export function useSubmitTeamName(){
    return useMutation<DecodingDecadeResponse, Error, string>({
        mutationKey: ['submitTeamName'],
        mutationFn: async (teamName: string) => {
        const { data } = await api.post<DecodingDecadeResponse>(
            endpoints.decodingDecade.verifyAnswer,
            { teamName }
        );
        return data;
        },
    });
}

export function useGetDecodingDecadeImage(){
    return useQuery<DecodingDecadeImageResponse, Error>({
        queryKey: ['decodingDecadeImage'],
        queryFn: async () => {
            const { data } = await api.get<DecodingDecadeImageResponse>(
                endpoints.decodingDecade.getDecodingDecadeImage
            );
            return data;
        },
    })
}