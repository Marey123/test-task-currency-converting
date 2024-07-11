import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { ConversionedValue, ConversionedValueResult, getConversionedValueEndpoint } from '../services/services' // Adjust path as per your project structure
import { QueryKeys } from '../constants/constants' 

export const useGetConversionedValue = (data: ConversionedValue): UseQueryResult<ConversionedValueResult> => {
  return useQuery<ConversionedValueResult>({
    queryKey: [QueryKeys.CONVERSIONED_VALUE, data],
    queryFn: () => getConversionedValueEndpoint(data),
    enabled: data.amount !== 0
  })
}