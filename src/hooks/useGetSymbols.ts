
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CurrencyAmounts, getAllSymbolsEndpoint } from '../services/services'; // Adjust path as per your project structure
import { QueryKeys } from '../constants/constants'; // Adjust path as per your project structure

export const useGetSymbols = (): UseQueryResult<CurrencyAmounts> => {
  return useQuery<CurrencyAmounts>({
    queryKey: [QueryKeys.SYMBOLS],
    queryFn: getAllSymbolsEndpoint,
  });
};