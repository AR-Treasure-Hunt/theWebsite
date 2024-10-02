// import { UserDashboardResponseI } from '@/types/user';
// import api, { endpoints } from '@/utils/api';
// import { useQuery, useMutation } from '@tanstack/react-query';

// export function useFetchDashboard() {
//   return useQuery<UserDashboardResponseI>({
//     queryKey: ['dashboard'],
//     queryFn: async () => {
//       const { data } = await api.get<UserDashboardResponseI>(
//         endpoints.auth.dashboard,
//       );
//       return data;
//     },
//   });
// }