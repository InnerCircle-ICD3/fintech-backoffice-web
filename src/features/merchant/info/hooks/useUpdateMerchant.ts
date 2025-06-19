import { merchantsApi } from '@/api/merchants/api';
import { QUERY_KEYS } from '@/constants/queries';
import { MerchantInfoType } from '@/queries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { MerchantInfoSchema } from '../schema';

type FormValues = z.infer<typeof MerchantInfoSchema>;

export const useUpdateMerchant = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormValues) => merchantsApi.update(data),
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.MERCHANT.INFO });
      const previousData = queryClient.getQueryData(QUERY_KEYS.MERCHANT.INFO);

      // 낙관적 업데이트
      queryClient.setQueryData(QUERY_KEYS.MERCHANT.INFO, (old: MerchantInfoType) => ({
        ...old,
        name: newData.name,
        businessNumber: newData.businessNumber,
        contact: {
          name: newData.contactName,
          email: newData.contactEmail,
          phone: newData.contactPhone,
        },
      }));

      return { previousData };
    },
    onError: (_err, _newData, context) => {
      // 에러 시 롤백
      queryClient.setQueryData(QUERY_KEYS.MERCHANT.INFO, context?.previousData);
    },
    onSuccess,
    onSettled: () => {
      // 서버와 동기화
      queryClient.refetchQueries({ queryKey: QUERY_KEYS.MERCHANT.INFO });
    },
  });
};
