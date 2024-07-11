import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getConversionedValueEndpoint, ConversionedValue } from '../services/services'; // Adjust path as per your project structure
import { QueryKeys } from '../constants/constants'; 

export const useGetConversionedValue = (data: ConversionedValue): UseQueryResult<any> => {
  return useQuery<any>({
    queryKey: [QueryKeys.CONVERSIONED_VALUE, data],
    queryFn: () => getConversionedValueEndpoint(data),
    enabled: data.amount !== 0
  });
};