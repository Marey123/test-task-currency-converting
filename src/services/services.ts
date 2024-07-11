import axios from "axios";
import { baseUrl } from "../constants/constants";

export interface ConversionedValue {
  amount?: number;
  from?: string;
  to?: string;
}

export interface CurrencyAmounts {
  [currencyCode: string]: string;
}

export interface ConversionRate {
  [currency: string]: number;
}

export interface ConversionedValueResult {
  amount: number;
  base: string;
  date: string;
  rates: ConversionRate;
}

export const getAllSymbolsEndpoint = async (): Promise<CurrencyAmounts> => {
  const response = await axios.get(`${baseUrl}currencies`);
  return response.data;
};

export const getConversionedValueEndpoint = async (
  data: ConversionedValue
): Promise<ConversionedValueResult> => {
  const response = await axios.get(`${baseUrl}latest`, {
    params: {
      amount: data.amount,
      from: data.from,
      to: data.to,
    },
  });
  return response.data;
};
