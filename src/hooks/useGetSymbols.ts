
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { CurrencyAmounts, getAllSymbolsEndpoint } from '../services/services'
import { QueryKeys } from '../constants/constants'

export const useGetSymbols = (): UseQueryResult<CurrencyAmounts> => {
  return useQuery<CurrencyAmounts>({
    queryKey: [QueryKeys.SYMBOLS],
    queryFn: getAllSymbolsEndpoint,
  })
}